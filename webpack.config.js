const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js'
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      }
    ],
  },
  stats: {
    colors: true,
  },
  devServer: {
    // watchContentBase: true,
    hot: true,
  }
};