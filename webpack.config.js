var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ken-fetch.js',
    library: 'kenFetch',
    libraryTarget: 'umd'
  },
};