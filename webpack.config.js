module.exports = {
  entry: [
    './src/index.tsx'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-2'],
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }, {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
    }, {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: "file-loader"
    }, {
      test: /\.tsx?$/,
      loader: "awesome-typescript-loader"
    }, {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'ts', 'tsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};
