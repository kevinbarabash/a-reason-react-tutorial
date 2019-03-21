const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: "none",
    entry: {
        main: './lib/js/src/Main.js',
    },
    output: {
        publicPath: "/",
        path: __dirname + '/',
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            maxAsyncRequests: Infinity,
            minSize: 0,
            minChunks: 1,
            cacheGroups: {
                bs_platform: {
                    test: /[\\/]node_modules[\\/]bs-platform/,
                    priority: -1
                },
                // default: false,
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    devServer: {
        contentBase: __dirname + "/public",
    },
};

