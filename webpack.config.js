var webpack = require('webpack');

var config = {
	context: __dirname + '/src',
	devtool: 'source-map',
	entry:   './index.js',
	output:  {
		path:      __dirname + '/dist',
		filename: 'bundle.js'
	},
    plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	],
	module: {
		loaders: [
            {
				test: /\.html$/,
				loader: 'raw',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.scss$/,
				loader: 'style!css!sass'
			},
			{
				test:    /\.js$/,
				loader:  'babel?presets[]=es2015',
				exclude: /node_modules/
			},
			{
				test: /\.(woff|ttf|woff2|eot)$/,
				loader: 'file?name=fonts/[name].[ext]'
			},
			{
				test: /\.(svg|jpg|gif|jpeg)$/,
				loader: 'file?name=images/[name].[ext]'
			}
		]
	}
};

module.exports = config;