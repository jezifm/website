const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/app.js",
    output: {
	path: __dirname + "/bin",
	filename: "app.bundle.js",
	publicPath: "/"
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{loader: "babel-loader"}]
	    },
	    {
		test: /\.scss$/,
		exclude: /node_modules/,
		use: [
		    {loader: "style-loader"},
		    {loader: "css-loader"},
		    {loader: "sass-loader"}
		]
	    },
	    {
		test: /\.pug$/,
		exclude: /node_modules/,
		use: [
		    {loader: 'raw-loader'},
		    {loader: 'pug-html-loader'}
		]
	    }
	]
    },
    plugins: [
    	// new UglifyJSPlugin(),
	new HtmlWebPackPlugin({
	    title: "Jezrael Arciaga",
	})
    ],
    devServer: {
	disableHostCheck: true,
    }
};
