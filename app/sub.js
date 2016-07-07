// CommonJS 风格
// function getSub() {
//     var element = document.createElement('div');
//     element.innerHTML = '<h2>Hello sub</h2>';
//     var list = [
//         '<p class="li-title">自动快速的帮我们生成HTML</p>'
//         + '<p>npm install html-webpack-plugin --save-dev</p>',
//         '<p class="li-title">新建一个开发服务器</p>'
//         + '<p>npm install webpack-dev-server --save-dev</p>',
//         '<p class="li-title">css-loader会遍历css文件，找到所有的url(...)并且处理</p>'
//         + '<p>npm install css-loader style-loader --save-dev</p>',
//         '<p class="li-title">处理图片和其他静态文件</p>'
//         + '<p>npm install url-loader --save-dev</p>',
//         '<p class="li-title">添加jquery和moment的支持</p>'
//         + '<p>npm install jquery moment --save-dev</p>',
//         '<p class="li-title">添加ES6的支持</p>'
//         + '<p>npm install babel-loader babel-preset-es2015 --save-dev</p>'
//     ];
//     var ul = document.createElement('ul');
//     for (var i=0; i<list.length; i++) {
//         var _li = document.createElement('li');
//         _li.innerHTML = list[i];
//         ul.appendChild(_li);
//     }
//     element.appendChild(ul);
//     var p1 = document.createElement('p'),
//         p2 = document.createElement('p');
//     p1.innerHTML = '打包，合并，压缩 webpack';
//     p2.innerHTML = '运行开发服务器 npm start';
//     element.appendChild(p1);
//     element.appendChild(p2);
//     return element;
// }

// module.exports = getSub;

// ES6 风格
export default function() {
    var element = document.createElement('div');
    element.innerHTML = '<h2>Hello sub</h2>';
    var list = [
        '<p class="li-title">自动快速的帮我们生成HTML</p>'
        + '<p>npm install html-webpack-plugin --save-dev</p>',
        '<p class="li-title">新建一个开发服务器</p>'
        + '<p>npm install webpack-dev-server --save-dev</p>',
        '<p class="li-title">css-loader会遍历css文件，找到所有的url(...)并且处理</p>'
        + '<p>npm install css-loader style-loader --save-dev</p>',
        '<p class="li-title">处理图片和其他静态文件</p>'
        + '<p>npm install url-loader --save-dev</p>',
        '<p class="li-title">添加jquery和moment的支持</p>'
        + '<p>npm install jquery moment --save-dev</p>',
        '<p class="li-title">添加ES6的支持</p>'
        + '<p>npm install babel-loader babel-preset-es2015 --save-dev</p>'
    ];
    var ul = document.createElement('ul');
    for (var i=0; i<list.length; i++) {
        var _li = document.createElement('li');
        _li.innerHTML = list[i];
        ul.appendChild(_li);
    }
    element.appendChild(ul);
    var _list = [
        '打包，合并，压缩 webpack',
        '运行开发服务器 npm start',
        '打包部署上线 npm run build'
    ];
    for (var i=0; i<_list.length; i++) {
        var _p = document.createElement('p');
        _p.innerHTML = _list[i];
        element.appendChild(_p);
    }
    return element;
}