import { BuildMode } from "../type/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: BuildMode) => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev == "development" ? "style-loader" : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\.\w+$/i,
                        localIdentName: isDev == "development" 
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : '[hash:base64]'
                    },
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }
}