const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        stock: "./src/index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            // text loader
            { test: /\.txt$/, use: 'raw-loader' },
            // css loader
            {
                test: /\.s?css$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                    // , options: { modules: true }
                ]
            },
            { test: /\.html$/, use: [{ loader: 'html-loader' }] },
            // js loader
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: "babel-loader"
            },
            { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/, use: [{ loader: 'file-loader' }] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
    ]
}


