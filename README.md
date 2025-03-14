# ESlint Configuration Presets - by LacusSoft

<p>
  <img src="https://img.shields.io/npm/v/eslint-config-any" alt="NPM Latest Version" />

  <img src="https://img.shields.io/npm/dependency-version/eslint-config-any/peer/eslint" alt="Minimum ESlint version" />

  <img src="https://img.shields.io/npm/dm/eslint-config-any.svg?style=flat-square" alt="Downloads Count" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/eslint-config-any?" alt="Last Update Date" />

  <img src="https://img.shields.io/github/license/juliolmuller/eslint-config-any" alt="Project License" />
</p>

This package provides LacuSoft's base linting configurations for ESlint, in JavaScript projects environments.

```bash
$ npm install -D eslint eslint-config-any
```

## Standard preset

For vanilla JavaScript projects:

```json
// .eslintrc file
{
  "extends": [
    "lacussoft"
  ]
}
```

## TypeScript preset

For TypeScript projects:

```json
// .eslintrc file
{
  "extends": [
    "lacussoft", // optional
    "lacussoft/typescript"
  ]
}
```

## React preset

For React projects using React and JSX syntax:

```json
// .eslintrc file
{
  "extends": [
    "lacussoft",            // optional
    "lacussoft/typescript", // optional (if using TypeScript)
    "lacussoft/react"
  ]
}
```

## React Native preset

For React projects using React Native (it extends all configuration from the `react` preset):

```json
// .eslintrc file
{
  "extends": [
    "lacussoft",            // optional
    "lacussoft/typescript", // optional (if using TypeScript)
    "lacussoft/react-native"
  ]
}
```

## Vue preset

For Vue 3 (default) projects:

```json
// .eslintrc file
{
  "extends": [
    "lacussoft",            // optional
    "lacussoft/typescript", // optional (if using TypeScript)
    "lacussoft/vue"
  ]
}
```

...or if using Vue 2:

```json
// .eslintrc file
{
  "extends": [
    "lacussoft",            // optional
    "lacussoft/typescript", // optional (if using TypeScript)
    "lacussoft/vue/v2"
  ]
}
```
