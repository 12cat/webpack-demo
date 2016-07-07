/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sub = __webpack_require__(1);
	var app = document.createElement('div');
	app.innerHTML = '<h1>Hello index</div>';
	app.appendChild(sub());
	document.body.appendChild(app);

/***/ },
/* 1 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);