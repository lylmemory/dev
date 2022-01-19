module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['error', 'never'],
    'no-trailing-spaces': 1,
    'no-extra-parens': ['error', 'all', { nestedBinaryExpressions: false }],
    'no-var': 'error',
    indent: ['error', 4],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'array-bracket-spacing': ['error', 'never'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'lines-between-class-members': ['error', 'always'],
    'max-len': ['error', { code: 280 }],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    'arrow-spacing': 'error',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'no-invalid-this': 'warn',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': 0,
    'handle-callback-err': 0,
    camelcase: 0,
    'no-explicit-any': 0,
    'explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
