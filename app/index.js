// require('./main.css');
// var sub = require('./sub');
// var $ = require('jquery');
// var moment = require('moment');
// var app = document.createElement('div');
// app.innerHTML = '<h1>Hello index</div>';
// document.body.appendChild(app);
// app.appendChild(sub());
// $('body').append('<p class="time">look at me! now is '+ moment().format() +'</p>');

// ES6 风格
import './main.css';
import sub from './sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');
const myPromise = Promise.resolve(42);
myPromise.then((number)=> {
    $('body').append('<p class="time">promise result is '
        + number + ' now is ' + moment().format() +'</p>')
});
app.innerHTML = '<h1>Hello index</div>';
document.body.appendChild(app);
app.appendChild(sub());