import webpack from "webpack"
import { BuildOptions } from "./type/config"
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {

    const scssLoader = buildCssLoader(options.mode);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],  
    }

    const imgLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
			  { loader: 'file-loader',
			  options: { name: '[name].[ext]', outputPath: 'images/', },
            }
        ]
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        scssLoader,
        svgLoader,
        imgLoader
    ]
}