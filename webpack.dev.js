const appName = 'den';

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');


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
const miniCssExtract = new MiniCssExtractPlugin({
    filename: `${appName}.[hash].css`
});
const styleLint = new StyleLintPlugin({
    configFile: '.stylelintrc',
    context: path.resolve(__dirname, `./src/sass/`),
    files: '**/*.scss',
    failOnError: false,
    quiet: false,
});
const workbox = new WorkboxPlugin.InjectManifest(
    {
        swSrc: './src/ts/source/core/service-worker/sw.js',
        swDest: 'sw.js'
    }
);


const config = {
    mode: 'development',
    entry: './app.ts',
    output: {
        path: __dirname,
        publicPath:`/`,
        filename: `${appName}.[hash].js`
    },
    plugins: [
        cleanWebpack,
        copyWebpack,
        htmlWebpack,
        miniCssExtract,
        workbox,
        styleLint
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
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
    },
    // devServer: {
    //     contentBase: path.join(__dirname, `${appName}`),
    //     compress: true,
    //     inline: true,
    //     port: 9000,
    //     publicPath: '/',
    //     stats: {
    //         colors: true,
    //         hash: false,
    //         version: false,
    //         timings: false,
    //         assets: true,
    //         chunks: false,
    //         modules: false,
    //         reasons: false,
    //         children: false,
    //         source: false,
    //         errors: true,
    //         errorDetails: true,
    //         warnings: true,
    //         publicPath: true
    //     },
    //     watchContentBase: true
    // }
};


module.exports = config;
