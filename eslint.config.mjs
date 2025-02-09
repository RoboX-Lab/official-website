import eslint from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import noChinese from '@markof/eslint-plugin-no-chinese'
import tailwind from 'eslint-plugin-tailwindcss'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      eslint.configs.recommended,
      noChinese.configs.recommended,
      ...tseslint.configs.recommended,
      prettierRecommended
    ],
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      parserOptions: {
        project: './tsconfig.app.json'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss: tailwind
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...tailwind.configs.recommended.rules,
    'tailwindcss/classnames-order': 'off',
      'prettier/prettier': ['error', {
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        printWidth: 120,
        endOfLine: 'auto',
      }],
    },
  }
)
