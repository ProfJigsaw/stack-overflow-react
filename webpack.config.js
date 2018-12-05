var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app_bundle.js',
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.s[ca]ss$/, use: ["style-loader", "css-loader", "sass-loader"]}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    mode: process.env.NODE_ENV || 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        })
    ]
}
