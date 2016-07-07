var path = require('path');
var plugin = require('html-webpack-plugin');

// 定义一些文件夹路径
var ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, 'app'),
    BUILD_PATH = path.resolve(ROOT_PATH, 'build');

// 模块 要用什么不同的模块来处理各种类型的文件
module.exports = {
    // 入口文件 让webpack用哪个文件作为项目的入口
    entry: APP_PATH,
    // 出口 让webpack把处理完成的文件放在哪里
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // 添加插件，自动生成一个html文件
    plugins: [
        new plugin({ title:'webpack demo'})
    ]
};