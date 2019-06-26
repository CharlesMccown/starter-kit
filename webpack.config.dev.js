import path from 'path'
import merge from'webpack-merge'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import common from './webpack.common'

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
	plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true
    }),
		new webpack.HotModuleReplacementPlugin()
	]
})
