const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'vue-string-directives.common.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module'
  },
  experiments: {
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
