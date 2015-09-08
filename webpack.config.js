module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: './client/index.js',
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      { test: /\.json$/, loader: 'json-loader'}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
