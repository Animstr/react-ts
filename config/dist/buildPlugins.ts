import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './type/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin,
        new HtmlWebpackPlugin({ template: paths.html}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].scss',
            chunkFilename: 'css/[name].[contenthash:8].scss'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false
        })
    ]
}