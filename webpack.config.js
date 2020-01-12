const path = require('path');

module.exports = {
  output: {
    // path: path.resolve(__dirname, "dist"),
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
    // contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    hot: true,
  }
};