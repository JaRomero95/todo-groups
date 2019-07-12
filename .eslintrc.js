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
    'no-use-before-define': ['error', {'functions': false}],
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'ignore'
    }],
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': ['state']
    }],
    "object-curly-newline": [
      "error",
      {
        "multiline": true,
        "consistent": true
      }
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
