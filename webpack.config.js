const path = require('path');

module.exports = {
  mode: 'development',
  entry: './web/src/index.js',
  output: {
    filename: 'game.js',
    path: path.resolve(__dirname, 'web', 'dist'),
  },
};