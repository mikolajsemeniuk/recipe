const path = require('path');
const copy = require('copy-webpack-plugin');
const fs = require('fs');

const srcDir = path.resolve(__dirname, 'src');
const entries = fs.readdirSync(srcDir).reduce((acc, file) => {
    // Check if the file is a TypeScript (.ts) file
    if (file.endsWith('.ts')) {
        const name = path.basename(file, '.ts'); // Get name without extension
        acc[name] = path.resolve(srcDir, file); // Add entry point
    }
    return acc;
}, {});


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