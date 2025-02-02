import path from "path"
import { BulidPaths } from "../dist/type/config"
import webpack, { RuleSetRule } from "webpack"
import { buildCssLoader } from "../dist/loaders/buildCssLoader";


export default ({config}: {config: webpack.Configuration}) => {
    const paths: BulidPaths = {
        entry: '',
        dist: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    }
    config.module.rules.push(buildCssLoader('development'))
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules = config.module.rules.map((rule : RuleSetRule ) => {
        if (/svg/.test(rule.test as string)) {
            return {...rule, exclude: /\.svg$/i}
        }
        return rule
    })
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],  
    })
    return config 
}