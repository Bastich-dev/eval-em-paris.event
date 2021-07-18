const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const webpack = require('webpack'); //to access built-in plugins
const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        print: "./src/print.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Output Management",
            title: "Development",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    mode: "production",
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    // optimization: {
    //     splitChunks: {chunks: 'all'}
    // },

    module: {
        rules: [
            // css loader
            {
                test: /\.s?css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    // , options: { modules: true }
                ],
            },
            { test: /\.html$/, use: [{ loader: "html-loader" }] },
            // js loader
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
            },
            {
                test: /\.(woff(2)?|ttf|eot|gif|png|jpe?g|svg|ico|map|pane)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
    ],
};
