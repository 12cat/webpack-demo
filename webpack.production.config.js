var path = require('path');
var webpack = require('webpack');
var plugin = require('html-webpack-plugin');

// 定义一些文件夹路径
var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build'),
    TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    // 入口文件 让webpack用哪个文件作为项目的入口
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        mobile: path.resolve(APP_PATH, 'mobile.js'),
        // 添加要打包在vendors里面的库
        vendors: ['jquery', 'moment']
    },
    // 出口 让webpack把处理完成的文件放在哪里
    output: {
        path: BUILD_PATH,
        // [name]会根据入口文件名称生成多个js文件(app.js,mobile.js和vendors.js)
        filename: '[name].[hash].js'
    },
    // 模块 要用什么不同的模块来处理各种类型的文件
    module: {
        loaders: [
            {
                test: /\.css$/,             // 一个正则，包含需要匹配的文件
                loaders: ['style', 'css'],  // loaders的处理顺序是从右到左的
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=300000'   // 图片小于40000，启用base64编码图片
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    // 添加插件，自动生成一个html文件
    plugins: [
        // 这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        // 把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new plugin({
            title:'webpack demo',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            // chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new plugin({
            title: 'mobile',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        })
    ]
};