import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins (path: string): webpack.WebpackPluginInstance[] {

    return [
        new webpack.ProgressPlugin,
        new HtmlWebpackPlugin({ template: path}),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].scss',
            chunkFilename: 'css/[name].[contenthash:8].scss'
        }),
    ]
}