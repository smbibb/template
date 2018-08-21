const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name.bundle.js]',
    path: path.resolve(__dirname, 'dist')
  }
};
