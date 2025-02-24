import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../dist/loaders/buildCssLoader';
import { BulidPaths } from '../dist/type/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BulidPaths = {
        dist: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src, 'node_modules');
    config.resolve.extensions.push('.ts', '.tsx');

     
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.resolve.alias = {
        '@app': path.resolve(paths.src, 'app'),
        '@shared': path.resolve(paths.src, 'shared'),
        '@features': path.resolve(paths.src, 'features'),
        '@widgets': path.resolve(paths.src, 'widgets'),
    }

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module.rules.push(buildCssLoader('development'));

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
