import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
/// [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
/// Turns off all rules that are unnecessary or might conflict with Prettier
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
/// While you can use the official plugin [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss) for ordering your classnames...
/// eslint-plugin-tailwindcss offers more than 5 other rules, that you can benefit from on top of prettier-plugin-tailwindcss.
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
