const appName = 'den';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');


const cleanWebpack = new CleanWebpackPlugin(
    [`./${appName}`]
);
const copyWebpack = new CopyWebpackPlugin(
    [
        {from: './src/assets/', to: './assets'},
        {from: './src/html', to: './'}
    ],
    { ignore: ['.DS_Store'] }
);
const htmlWebpack = new HtmlWebpackPlugin(
    {
        filename: 'index.html',
        template: './src/html/index.html'
    }
);
const miniCssExtract = new MiniCssExtractPlugin(
    {
        filename: `${appName}.[hash].css`
    }
);
// const workbox = new WorkboxPlugin.InjectManifest(
//     {
//         swSrc: './src/ts/source/core/service-worker/sw.js',
//         swDest: 'sw.js'
//     }
// );


const config = {
    mode: 'production',
    entry: './app.ts',
    output: {
        filename: `${appName}.[hash].js`,
        path: path.resolve(__dirname, `${appName}/`)
    },
    plugins: [
        cleanWebpack,
        copyWebpack,
        htmlWebpack,
        miniCssExtract,
        // workbox
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    target: 'electron-main',
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: `url-loader?name=${appName}/assets/images/[name].[ext]`
            },
            {
                test: /\.(ttf|woff|woff2)$/i,
                loader: `url-loader?name=${appName}/assets/fonts/[name].[ext]`
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            }
        ]
    }
};


module.exports = config;
