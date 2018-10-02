var merge = require("webpack-merge");
var path = require("path");
var webpack = require("webpack");
var common = require("./webpack.common.js");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
module.exports = merge(common, {
    plugins: [new OpenBrowserPlugin({ url: 'http://127.0.0.1:8080/test/demo1/' })],
    devServer: {
        disableHostCheck: true,
        progress: true,
        proxy: {
            "/api/*": {
                target: "http://127.0.0.1:9000",
                changeOrigin: true,
                secure: false
            }
        },
        host: "127.0.0.1",
        contentBase: path.join(__dirname, "./"),
        publicPath: "/dist/",
        hot: false,
        inline: false
    }
});