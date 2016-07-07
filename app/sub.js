// CommonJS 风格
function getSub() {
    var element = document.createElement('div');
    element.innerHTML = '<h2>Hello sub</h2>';
    var list = [
        '<p class="li-title">自动快速的帮我们生成HTML</p>'
        + '<p>npm install html-webpack-plugin --save-dev</p>',
        ''
    ];
    var ul = document.createElement('ul');
    for (var i=0; i<list.length; i++) {
        var _li = document.createElement('li');
        _li.innerHTML = list[i];
        ul.appendChild(_li);
    }
    element.appendChild(ul);
    var p1 = document.createElement('p'),
        p2 = document.createElement('p');
    p1.innerHTML = 'webpack';
    p2.innerHTML = '';
    element.appendChild(p1);
    element.appendChild(p2);
    return element;
}

module.exports = getSub;