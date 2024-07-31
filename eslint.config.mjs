import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    name: 'ESLint configuration',
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['**/node_modules/**', '*.config.{js,cjs,mjs}', '**/dist/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browsers,
      }
    },
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true
    },
    plugins: {
      '@babel/plugin-transform-runtime': {
        version: '7.24.7'
    },
  },
  rules: {},
  settings: {}
}];
