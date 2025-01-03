import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
/// [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
/// Turns off all rules that are unnecessary or might conflict with Prettier
import eslintConfigPrettier from 'eslint-config-prettier';
/// [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
/// ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
/// [eslint-plugin-tailwindcss](https://github.com/francoismassart/eslint-plugin-tailwindcss)
/// While you can use the official plugin for ordering, this plugin offers more than 5 other rules
import eslintPluginTailwindCSS from 'eslint-plugin-tailwindcss';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintPluginPerfectionist.configs['recommended-alphabetical'],
  eslintConfigPrettier,
  ...eslintPluginTailwindCSS.configs['flat/recommended'],
];

export default eslintConfig;
