import path from 'path';
import webpack from 'webpack'; 
import { buildWebpackConfig } from './config/dist/buildWebpackConfig';
import { BuildEnv } from './config/dist/type/config';

export default (env: BuildEnv): webpack.Configuration => {
	const config: webpack.Configuration = buildWebpackConfig({
		mode: env.mode || 'development',
		paths: {
			entry: path.resolve(__dirname, 'src', 'index.tsx'),
			dist: path.resolve(__dirname, 'dist'),
			html: path.resolve(__dirname, 'public', 'index.html')
		},
		port: env.port || 3000
	})
	return config;
};