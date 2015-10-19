export default {
  entry: './src/app.js',
  output: {
    filename: 'public/js/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,            // target: *.js(x)
        exclude: /(node_modules)/,  // exclude npm modules.
        loader: 'babel'
      }
    ]
  }
};