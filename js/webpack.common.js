const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: '../index.html' },
        { from: '../css', to: 'css' },
	{ from: '../images', to: 'images' },
      ],
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
};
