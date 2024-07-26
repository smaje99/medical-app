import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import react from 'eslint-plugin-react';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactHooks from 'eslint-plugin-react-hooks';
import tailwindcss from 'eslint-plugin-tailwindcss';
import nextRecommended from 'eslint-plugin-next-recommended';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: [
      '**/node_modules/',
      '**/.next/',
      '**/public/',
      'eslint.config.mjs',
      'next.config.mjs',
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      'eslint:recommended',
      'next/core-web-vitals',
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:tailwindcss/recommended',
      'plugin:next-recommended/recommended',
    ),
  ),
  {
    plugins: {
      react: fixupPluginRules(react),
      '@typescript-eslint': fixupPluginRules(typescriptEslintPlugin),
      prettier: fixupPluginRules(prettier),
      'simple-import-sort': simpleImportSort,
      'react-hooks': fixupPluginRules(reactHooks),
      tailwindcss: fixupPluginRules(tailwindcss),
      'next-recommended': fixupPluginRules(nextRecommended),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2023,
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: './tsconfig.json',
      },
    },

    settings: {
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        typescript: {
          alwaysTryTypes: true,
        },

        alias: true,
      },
    },

    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'max-len': ['error', 90],

      quotes: [
        2,
        'single',
        {
          avoidEscape: true,
        },
      ],

      indent: [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],

      curly: 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',

      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: [],
        },
      ],
    },
  },
];
