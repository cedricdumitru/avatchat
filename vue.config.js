const StyleLintPlugin = require('stylelint-webpack-plugin');
const path = require('path');

module.exports = {
  runtimeCompiler: true,
  css: {
    sourceMap: true,
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
};
