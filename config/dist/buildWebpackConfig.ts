import path from 'path';
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
        },
        plugins: buildPlugins(paths.html),
        module: {
            rules: buildLoaders(options)
          },
        resolve: buildResolvers(),
        devServer: mode == 'development' ? buildDevServer(options) : undefined,
        devtool: false,
    }
}