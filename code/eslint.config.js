import js from '@eslint/js'
import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'
import testingLibrary from 'eslint-plugin-testing-library'
import jestDom from 'eslint-plugin-jest-dom'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default tseslint.config(
  {
    ignores: ['dist', 'public/mockServiceWorker.js'],
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      testingLibrary.configs['flat/react'],
      jestDom.configs['flat/recommended'],
      jsxA11y.flatConfigs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      reactPlugin,
      testingLibrary,
      jestDom,
      jsxA11y,
    },
    rules: {
      // rule does not work with vitest unless you apply globals
      'testing-library/no-manual-cleanup': 'off',
      // disable rule for jsx attributes
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
    },
  }
)
