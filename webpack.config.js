const path = require("path")
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: "development",
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    entry: {
        index: path.join(__dirname, "src/js/index.js"),
    },
    optimization: {
        minimizer: [new TerserPlugin()],
    },
    output: {
        path: path.join(__dirname, "public/js/"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js|jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/env",
                            "@babel/react"
                        ]
                    }
                },
            },
        ]
    },
    devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  }
}