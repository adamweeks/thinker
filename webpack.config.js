var webpack = require('webpack');

var config = {
	context: __dirname + '/src',
	devtool: 'source-map',
	entry:   './index.js',
	output:  {
		path:      __dirname + '/src',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test:    /\.js$/,
				loader:  'babel?presets[]=es2015',
				exclude: /node_modules/
			}
		]
	}
};

module.exports = config;