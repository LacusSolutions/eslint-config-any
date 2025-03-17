import jsonPlugin from '@rollup/plugin-json';
import nodeResolvePlugin from '@rollup/plugin-node-resolve';
import terserPlugin from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';
import copyPlugin from 'rollup-plugin-copy';
import deletePlugin from 'rollup-plugin-delete';
import esBuildPlugin from 'rollup-plugin-esbuild';

import packageMeta from './package.json' with { type: 'json' };

export default defineConfig([
  {
    input: 'scripts/init.ts',
    output: [
      {
        file: 'bin/init.js',
        format: 'esm',
        sourcemap: 'inline',
        banner: `
/**
 * ${packageMeta.name} v${packageMeta.version}
 * \`init\` - CLI tool to help you configure ESlint in your project.
 *
 * @author ${packageMeta.author.name}.
 * @license ${packageMeta.license} - 2020-${new Date().getFullYear()}
 */
`,
      },
    ],
    plugins: [
      deletePlugin({
        targets: ['bin/*'],
      }),
      copyPlugin({
        targets: [{ src: 'scripts/templates/**/*', dest: 'bin/templates/' }],
      }),
      jsonPlugin(),
      nodeResolvePlugin(),
      esBuildPlugin({
        target: 'esnext',
      }),
      terserPlugin(),
    ],
    external: [
      ...Object.keys(packageMeta.dependencies || {}),
      ...Object.keys(packageMeta.devDependencies || {}),
      ...Object.keys(packageMeta.peerDependencies || {}),
    ],
  },
]);
