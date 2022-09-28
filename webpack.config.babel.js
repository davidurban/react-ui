const Path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => ({
  devtool: argv.mode === 'production'
    ? false
    : 'eval-cheap-module-source-map',
  entry: {
    reactui: [
      Path.join(__dirname, 'src/lib/index.js'),
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                excludePaths: ['node_modules'],
              },
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: argv.mode === 'production'
                  ? '[hash:base64:8]'
                  : '[name]__[local]__[hash:base64:8]',
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: ['removeViewBox'],
              },
              titleProp: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    filename: '[name].js',
    path: Path.join(__dirname, 'src/docs/_assets/generated/'),
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: ['src/lib', 'node_modules'],
  },
});
