const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

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
    plugins: [
        new ExtractTextWebpackPlugin('styles.css'), // call the ExtractTextWebpackPlugin constructer and name our css file
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), // A directory or URL to serve HTML content from
        historyApiFallback: true, // fallback to /index.html for Single Page Application
        inline: true, // inline mode (set to false to disable including client scripts (like livereload))
        open: true // open default browser while launching
    },
    devtool: 'eval-source-map' // enable devtool for better debugging experience
}

module.exports = config;

// Uygulamamızı geliştirirken hot reload sebebiyle herhangi bir
// dosyada yaptığımız değişiklik sonrası projemiz otomatik olarak derlenecektir.
// Development aşamasında js dosyalarının her seferinde uglify edilmesine gerek olmadığı için
// bu işlemi sadece production olarak derlediğimizde yapmasını sağlıyoruz
if (process.env.NODE_ENV === 'production') { 
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin(), // call the Uglify plugin
        new OptimizeCSSAssets()
    );
}