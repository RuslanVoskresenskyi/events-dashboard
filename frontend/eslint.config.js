//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'

export default [
  ...tanstackConfig,
  {
    rules: {
      // ── Default ──────────────────────────────────────────
      'import/no-cycle': 'off',
      'import/order': 'off',
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/require-await': 'off',
      'pnpm/json-enforce-catalog': 'off',

      // ── Лапки ──────────────────────────────────────────
      'quotes': ['error', 'single', { avoidEscape: true }],

      // JSX завжди подвійні: <Comp title="hello" />
      'jsx-quotes': ['error', 'prefer-double'],

      // ── Відступи ────────────────────────────────────────
      'indent': ['error', 2, { SwitchCase: 1 }],

      // ── Пробіли в {} об'єктів/імпортів ──────────────────
      'object-curly-spacing': ['error', 'always'],

      // ── Крапка з комою ──────────────────────────────────
      'semi': ['error', 'never'],

      // ── Кома в кінці ────────────────────────────────────
      'comma-dangle': ['error', 'always-multiline'],

      // ── TS-specific ──────────────────────────────────────
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    ignores: ['eslint.config.js', 'prettier.config.js'],
  },
]
