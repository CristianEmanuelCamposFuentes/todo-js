// TODO: SUBIR ESTA ACTUALIZACION A GITHUB
// FIXME: QUITAR OPTIMIZACION {} Y VER DIFERENCIAS CON VERSION ANTERIOR
// TODO: Al terminar el proyecto subir webpack.config.js a foro de respuestas


const HtmlWebPack       = require('html-webpack-plugin'); 
const MiniCssExtract    = require('mini-css-extract-plugin');
const CopyPlugin        = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtract.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPack({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ]

}

