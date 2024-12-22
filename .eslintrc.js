const path = require('path');

module.exports = {
  root: true,
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue', '.json'],
        map: [
          ['~', path.resolve(__dirname, './src')],
          ['@', path.resolve(__dirname, './src')],
        ],
      },
    },
  },
};
