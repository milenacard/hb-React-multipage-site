const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
// const WebpackPluginCopy = require('webpack-plugin-copy')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /(node_modules)/,
        options: {
          error: false,
          snazzy: true
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '**/*.scss',
      failOnError: false,
      quiet: false
    })/*,
    new WebpackPluginCopy([
      {
        from: 'assets',
        to: 'assets'
      }
    ]) */
  ]
}
