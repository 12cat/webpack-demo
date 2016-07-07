var sub = require('./sub');
var app = document.createElement('div');
app.innerHTML = '<h1>Hello index</div>';
app.appendChild(sub());
document.body.appendChild(app);