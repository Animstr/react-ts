import webpack from "webpack"
import { BuildOptions } from "./type/config"
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          options.mode == "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
            {
				loader: "css-loader",
				options: {
				modules: {
					auto: /\.module\.\w+$/i,
					localIdentName: options.mode == "development" 
						? "[path][name]__[local]--[hash:base64:5]"
						: '[hash:base64]'
					},
				},
            },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    }

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