var path = require('path');
var plugin = require('html-webpack-plugin');

// 定义一些文件夹路径
var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    // 入口文件 让webpack用哪个文件作为项目的入口
    entry: APP_PATH,
    // 出口 让webpack把处理完成的文件放在哪里
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // 添加开发服务器，package.js配置启动命令，访问localhost:8080
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    // devServer: {    // 配置webpack-dev-server代理
    //     hot: true,
    //     inline: true,
    //     proxy: {
    //         '/api/*': {
    //             target: 'http://localhost:5000',
    //             secure: false
    //         }
    //     }
    // },
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
        new plugin({ title:'webpack demo'})
    ],
    // 采用source-map的形式直接显示你出错代码的位置（没觉得好用）
    devtool: 'eval-source-map'
    // devtool: 'false'
};