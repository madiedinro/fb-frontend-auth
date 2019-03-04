const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const { readFileSync } = require('fs');
const jsyaml = require('js-yaml');



const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);
const envName = process.env.NODE_ENV === 'production' ? 'production' : process.env.NODE_ENV || 'development';

const envConfig = jsyaml.load(readFileSync('./config.yml'));
const config = envConfig[envName];

module.exports = (env, args) => {
	let production = false;

	if (args && args.mode === 'production') {
		production = true;
		console.log('== Production mode');
	} else {
		console.log('== Development mode');
	}

	return {
		entry: {
			main: './src/bootstrap.tsx'
		},
		output: {
			filename: '[name].js',
			path: __dirname + '/dist'
		},
		target: 'web',
		devtool: production ? false : 'source-map',
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					}],
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [

						{
							loader: process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader
						}, {
							loader: "css-loader"
						}
						// , {
						// 	loader: "sass-loader"
						// }
					]
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: 'url-loader?limit=10000'
					// exclude: /node_modules/,
					// use: [
					// 	{
					// 		loader: 'file-loader',
					// 		options: {
					// 			name: '[path][name].[ext]?[hash:base64:5]',
					// 			outputPath: 'images'
					// 		}
					// 	}]
				},

			],
		},
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			},
			contentBase: './dist',
			// compress: true,
			port: 3030,
			// https: true
		},
		plugins: [
			new webpack.DefinePlugin({
				'PRODUCTION': JSON.stringify(isProduction),
				APP_CONFIG: JSON.stringify(config)
			}),
			new CopyWebpackPlugin([
				{
					from: 'src/static/images/*',
					to: 'images',
					toType: 'dir',
					flatten: true
				},
			]),
			new HtmlWebpackPlugin({
				template: './src/static/index.html'
			}),
			new ForkTsCheckerWebpackPlugin(),
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			})
		],
	};
};