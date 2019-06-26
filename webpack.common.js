const path = require("path");
const webpack = require("webpack");

module.exports = {
    module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env", "@babel/preset-react"] }
			},{
			test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {},
					},
				],
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			  }, {
				test: /\.css$/,
				loader: 'css-loader',
				query: {
				  modules: true
				}
			}
		]
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "dist/"),
		publicPath: "/",
		filename: "bundle.js"
	}
}
