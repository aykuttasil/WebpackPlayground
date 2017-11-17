const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: "output.js"
    },
    module: {
        rules: [{
            test: /\.js$/, // files ending with .js
            exclude: /node_modules/, // exclude the node_modules directory
            loader: "babel-loader" // use this (babel-core) loader
        }, {
            test: /\.scss$/, // files ending with .scss
            use: ExtractTextWebpackPlugin.extract({ // call our plugin with extract method
                use: ['css-loader', 'sass-loader'], // use these loaders
                fallback: 'style-loader' // fallback for ant CSS not extracted
            })
        }]
    },
    plugins:[
        new ExtractTextWebpackPlugin('styles.css') // call the ExtractTextWebpackPlugin constructer and name our css file
    ]
}

module.exports = config;