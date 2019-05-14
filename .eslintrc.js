const production = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': production ? 'error' : 'off',
    'no-debugger': production ? 'error' : 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': 'off',
    'no-use-before-define': ['error', { 'functions': false }],
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'ignore'
    }]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
