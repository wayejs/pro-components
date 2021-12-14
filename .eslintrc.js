// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    browser: true,
    node: true,
  },
  globals: {
    jest: 'readonly',
  },
  extends: [
    'plugin:markdown/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: '*.vue',
      extends: [
        '@vue/typescript/recommended',
        'plugin:vue/recommended',
        '@vue/typescript'
      ]
    },
    {
      files: ['*.vue', '*.js'],
      extends: [
        'plugin:vue/essential',
        '@vue/standard'
      ],
      rules: {
        'vue/max-attributes-per-line': [
          2,
          {
            singleline: 20,
            multiline: {
              max: 1,
              allowFirstLine: false
            }
          }
        ],
        'vue/no-multiple-template-root': 0,
        'vue/no-lone-template': 0,
        'vue/no-v-model-argument': 0
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['standard-with-typescript'],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        '@typescript-eslint/strict-boolean-expressions': 0,
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/naming-convention': 0,
        'multiline-ternary': 0,
        'no-void': 0
      }
    },
    {
      files: '*.spec.ts',
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly'
      },
      rules: {
        '@typescript-eslint/no-floating-promises': 0
      }
    },
    {
      files: ['**/__tests__/**', '**/gulpfile.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
})
