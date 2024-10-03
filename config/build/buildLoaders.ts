import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev } : BuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader(isDev);

    const jpgLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        babelLoader,
        typeScriptLoader,
        cssLoader,
        svgLoader,
        jpgLoader,
    ];
}
