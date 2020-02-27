const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const outputFileNames = 'signupForm'

const isProduction = process.env.NODE_ENV === 'production'
const commonPlugings = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'public', 'index.html')
  })
]

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${outputFileNames}.js`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.less$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: isProduction
    ? [
        new MiniCssExtractPlugin({
          filename: `${outputFileNames}.css`
        }),
        ...commonPlugings
      ]
    : [...commonPlugings]
}
