const path = require('path');
const copy = require('copy-webpack-plugin');
const fs = require('fs');

const src = path.resolve(__dirname, 'src');
const reducer = (entries, file) => {
    if (file.endsWith('.ts')) {
        const name = path.basename(file, '.ts');
        entries[name] = path.resolve(src, file);
    }

    return entries;
}
const entries = fs.readdirSync(src).reduce(reducer, {});


module.exports = {
    mode: "production",
    entry: entries,
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