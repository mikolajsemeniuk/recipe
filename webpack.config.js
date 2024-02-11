const path = require('path');
const copy = require('copy-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        background: path.resolve(__dirname, "src", "background.ts"),
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new copy({
            patterns: [{ from: ".", to: ".", context: "public" }]
        }),
    ],
};