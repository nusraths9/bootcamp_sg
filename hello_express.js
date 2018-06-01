var express = require('express');
var app = express();

app.get('/', function (req, res)
{
	res.send('Hello, World of lights!!')
});

app.listen(3000, function () 
{
	console.log('Example app listining on port 3000');
});
