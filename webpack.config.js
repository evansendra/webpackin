const HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');

const config = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                include: ['./app']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: 'file-loader'
            },
            {
                test: /\.(html)$/,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './app/index.html'})
    ]
};

module.exports = config;