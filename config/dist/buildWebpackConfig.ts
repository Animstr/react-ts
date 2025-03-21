import webpack from 'webpack'; 
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './type/config';
import { buildDevServer } from './buildDevServer';


export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {

    const {paths, mode} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name][contenthash].js',
            path: paths.dist,
            clean: true,
            publicPath: '/'
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devServer: mode == 'development' ? buildDevServer(options) : undefined,
        devtool: false,
    }
}