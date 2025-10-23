import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
/// [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
/// Turns off all rules that are unnecessary or might conflict with Prettier
import eslintConfigPrettier from 'eslint-config-prettier';
/// [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)
/// ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintPluginPerfectionist.configs['recommended-alphabetical'],
  eslintConfigPrettier,
  // ...eslintPluginTailwindCSS.configs['flat/recommended'],
]);
