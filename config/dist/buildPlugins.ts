import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './type/config';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins ({paths, isDev, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin,
        new HtmlWebpackPlugin({ template: paths.html}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].scss',
            chunkFilename: 'css/[name].[contenthash:8].scss'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API_URL__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project)
        }),
    ]
    if (isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        )
    }
    return plugins
}