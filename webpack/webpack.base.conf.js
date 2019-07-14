const path = require('path');
const DEST_PATH = path.resolve(__dirname, '../dist');
const APP_PATH = path.resolve(__dirname, '../src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: DEST_PATH,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['es2015','react'],
                //     }
                // },
                loader: 'babel-loader',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },{
                test: /\.less$/,
                use: [
                    { loader: "stylus-loader" },
                    { loader: "css-loader" },
                    {
                        loader:"postcss-loader",
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browserslistrc: ['last 5 version']
                                })
                            ]
                        }
                    },{
                        loader: "less-loader"
                    }
                ],
                exclude: [/antd/]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            title: 'PresByter',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQutoes: true
            }
        })
    ],
    devServer: {
        port: '3030',
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
}