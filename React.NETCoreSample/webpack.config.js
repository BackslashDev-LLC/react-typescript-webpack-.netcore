const path = require('path');

module.exports = {
    entry: {
        components: './wwwroot/Views/react/expose-components.ts',
    },
    output: {
        filename: '[name].js',
        globalObject: 'this',
        path: path.resolve(__dirname, 'wwwroot/dist'),
        publicPath: 'dist/'
    },
    mode: "production",
    optimization: {
        runtimeChunk: {
            name: 'runtime', // necessary when using multiple entrypoints on the same page
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};