/// https://nextjs.org/docs/app/api-reference/config/eslint#reference
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
/// https://nextjs.org/docs/app/api-reference/config/eslint#reference
import nextTypescript from 'eslint-config-next/typescript';
/// https://github.com/schoero/eslint-plugin-better-tailwindcss
/// ESLint plugin to help you write better tailwindcss by improving readability with formatting rules and enforcing best practices with linting rules.
import eslintPluginBetterTailwindCss from 'eslint-plugin-better-tailwindcss';
/// https://github.com/azat-io/eslint-plugin-perfectionist
/// ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintPluginBetterTailwindCssConfig = {
  files: ['**/*.{jsx,tsx}'],
  languageOptions: {
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  name: 'better-tailwindcss/',
  plugins: {
    'better-tailwindcss': eslintPluginBetterTailwindCss,
  },
  rules: {
    ...eslintPluginBetterTailwindCss.configs['recommended-warn'].rules,
    ...eslintPluginBetterTailwindCss.configs['recommended-error'].rules,
  },
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/styles/globals.css',
    },
  },
};

export default defineConfig([
  ...nextTypescript,
  ...nextCoreWebVitals,
  globalIgnores([
    'node_modules/**',
    '.contentlayer/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  eslintPluginPerfectionist.configs['recommended-alphabetical'],
  // eslintConfigPrettier,
  eslintPluginBetterTailwindCssConfig,
]);
