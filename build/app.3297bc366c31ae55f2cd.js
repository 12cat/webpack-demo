webpackJsonp([0],{0:function(e,l,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t(1);var p=t(6),a=n(p),s=t(7),i=n(s),d=t(8),r=n(d),c=document.createElement("div"),o=Promise.resolve(42);o.then(function(e){(0,i["default"])("body").append('<p class="time">promise result is '+e+" now is "+(0,r["default"])().format()+"</p>")}),c.innerHTML="<h1>Hello index</div>",document.body.appendChild(c),c.appendChild((0,a["default"])())},6:function(e,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l["default"]=function(){var e=document.createElement("div");e.innerHTML="<h2>Hello sub</h2>";for(var l=['<p class="li-title">自动快速的帮我们生成HTML</p><p>npm install html-webpack-plugin --save-dev</p>','<p class="li-title">新建一个开发服务器</p><p>npm install webpack-dev-server --save-dev</p>','<p class="li-title">css-loader会遍历css文件，找到所有的url(...)并且处理</p><p>npm install css-loader style-loader --save-dev</p>','<p class="li-title">处理图片和其他静态文件</p><p>npm install url-loader --save-dev</p>','<p class="li-title">添加jquery和moment的支持</p><p>npm install jquery moment --save-dev</p>','<p class="li-title">添加ES6的支持</p><p>npm install babel-loader babel-preset-es2015 --save-dev</p>'],t=document.createElement("ul"),n=0;n<l.length;n++){var p=document.createElement("li");p.innerHTML=l[n],t.appendChild(p)}e.appendChild(t);for(var a=["打包，合并，压缩 webpack","运行开发服务器 npm start","打包部署上线 npm run build"],n=0;n<a.length;n++){var s=document.createElement("p");s.innerHTML=a[n],e.appendChild(s)}return e}}});