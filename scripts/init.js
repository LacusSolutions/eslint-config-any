import figlet from 'figlet';
import fs from 'node:fs';
import path from 'node:path';
import prompts from 'prompts';

import packageMeta from '../package.json' with { type: 'json' };

const MIN_COMPATIBLE_VERSION = 22;
const ESLINT_CONFIG_FILE = 'eslint.config';

await printWelcomeMessage();
await checkRuntimeVersion();

const targetDir = await getTargetDir();
const eslintConfigExt = await getEslintConfigExtension();
const setupOptions = await pickConfigOptions();
const templateCode = await getTemplateCode();

await writeEslintConfigFile();
await installEslintConfig();

async function printWelcomeMessage() {
  const packageName = packageMeta.name;
  const packageVersion = packageMeta.version;
  const printable = `${packageName} v${packageVersion}`;

  console.info('\n', figlet.textSync(printable), '\n\n');
}

async function checkRuntimeVersion() {
  const runtimeVersion = process.version;
  const majorVersionString = runtimeVersion.match(/v(\d+)/)[1];
  const majorVersionNumber = majorVersionString;

  if (majorVersionNumber < MIN_COMPATIBLE_VERSION) {
    console.error(
      `Node.js engine must be at least at version ${MIN_COMPATIBLE_VERSION}. Current version is ${runtimeVersion}.`,
    );
    process.exit(1);
  }
}

async function getTargetDir() {
  const targetArg = process.argv[2] || '.';
  const targetDir = path.isAbsolute(targetArg) ? targetArg : path.join(process.cwd(), targetArg);
  const targetDirExists = fs.existsSync(targetDir);

  if (!targetDirExists) {
    console.error(`Directory "${targetDir}" does not exist.`);
    process.exit(1);
  }

  return targetDir;
}

async function getEslintConfigExtension() {
  const targetProjectMetaFile = path.join(targetDir, 'package.json');

  if (!fs.existsSync(targetProjectMetaFile)) {
    console.error(`No "package.json" file found in directory "${targetProjectMetaFile}".`);
    process.exit(1);
  }

  const targetProjectMetaData = fs.readFileSync(targetProjectMetaFile, 'utf8');
  const targetProjectMeta = JSON.parse(targetProjectMetaData);
  const eslintConfigExtension = targetProjectMeta.type === 'module' ? 'js' : 'mjs';

  return eslintConfigExtension;
}

async function pickConfigOptions() {
  return prompts([
    {
      type: 'select',
      name: 'config',
      message: 'Select the environment of your project:',
      choices: [
        { title: 'React', value: 'react' },
        { title: 'Vue 3', value: 'vue' },
        { title: 'Vue 2', value: 'vue2' },
        { title: 'Node project', value: 'node' },
        { title: 'Browser project', value: 'browser' },
        { title: 'Node+Browser project', value: 'sharedNodeAndBrowser' },
      ],
    },
    {
      type: (config) => (/node|browser/i.test(config) ? 'toggle' : null),
      name: 'commonjs',
      message: 'Does your project use CommonJS?',
      active: 'Yes',
      inactive: 'No',
      initial: false,
    },
  ]);
}

async function getTemplateCode() {
  const thisScriptFile = process.argv[1];
  const thisScriptDir = path.dirname(thisScriptFile);
  const templateFile = path.resolve(thisScriptDir, '../scripts/templates', ESLINT_CONFIG_FILE);
  const rawTemplateCode = fs.readFileSync(templateFile, 'utf8');
  const configsPresets = [setupOptions.config];

  if (setupOptions.commonjs) {
    configsPresets.push('commonjs');
  }

  const repeatablePattern = /@repeatable(.*)\n/g;
  const repeatableOutput = Array(configsPresets.length).fill('$1\n').join('');
  let templateCode = rawTemplateCode.replace(repeatablePattern, repeatableOutput);

  for (const preset of configsPresets) {
    const configVariablePattern = '{{CONFIGS}}';

    templateCode = templateCode.replace(configVariablePattern, preset);
  }

  return templateCode;
}

async function writeEslintConfigFile() {
  const eslintConfigFile = path.resolve(targetDir, `${ESLINT_CONFIG_FILE}.${eslintConfigExt}`);

  fs.writeFileSync(eslintConfigFile, templateCode, 'utf8');
  console.info('\n\n✔️ ESLint config file created successfully.');
}

async function installEslintConfig() {
  const packageManagers = [
    { name: 'npm', command: 'npm install --save-dev', lockFiles: ['package-lock.json'] },
    { name: 'Yarn', command: 'yarn add --dev', lockFiles: ['yarn.lock'] },
    {
      name: 'pnpm',
      command: 'pnpm add --save-dev',
      lockFiles: ['pnpm-lock.yml', 'pnpm-lock.yaml'],
    },
    { name: 'bun', command: 'bun add --dev', lockFiles: ['bun.lock', 'bun.lockb'] },
  ];
  const targetPackageManager =
    packageManagers.find((pm) => {
      return pm.lockFiles.some((lockFile) => fs.existsSync(path.join(targetDir, lockFile)));
    }) ?? packageManagers[0];

  console.log({
    by_lock_file: targetPackageManager,
    by_user_agent: process.env.npm_config_user_agent,
  });
}
