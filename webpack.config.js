'use strict';

const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    entry: './client/store/index.js',
    output: {
        path: path.resolve('assets'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: 'url-loader?limit=100000&name=[name].[ext]',
            },
            {
                test: /\.(png|jpg|ico)$/,
                use: 'url-loader?limit=100000&name=[name].[ext]',
            },
        ]
    },
    plugins: [
        new BundleTracker({filename: './webpack-stats.json'}),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: ['node_modules'],
    },
    watch: true,
}