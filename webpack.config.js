var webpack = require('webpack');
var autoprefixer = require('autoprefixer')
var extract = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './dist',
    publicPath: 'dist',
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx', '.scss' ],
    modulesDirectories: [ 'src', 'node_modules' ]
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\//,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\//,
        loader: 'babel'
      },
      {
        test: /(\.scss|\.css)$/,
        loader: extract.extract('css!postcss!sass')
      },
    ]
  },
  eslint: {
    configFile: './.eslintrc.yml'
  },
  postcss: function () {
    return [ autoprefixer ];
  },
  plugins: [
    new extract('index.css')
  ]
};

module.exports.plugins = module.exports.plugins.concat([
  new webpack.DefinePlugin({
    VERSION: JSON.stringify(require('./package.json')).version,
    TIMESTAMP: JSON.stringify(new Date().toLocaleString()),
    'process.env': {
      NODE_ENV: process.env.NODE_ENV
    }
  })
])
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = module.exports.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]);
} else {
  module.exports.devtool = '#source-map'
}
