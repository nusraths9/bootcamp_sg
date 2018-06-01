
function ran()
{
	var arr = [];
	for (var i = 0; arr.join('').length <= 100; i++)
	{
		arr[i] = Math.random().toString(36).replace('0.','');
	}
	console.log(arr.join('').toString().substr(1, 100).length);
	console.log(arr.join('').toString().substr(1, 100));
}

ran();



function split()
{
	var arr = [];
	for (var i = 0; arr.length < 2; i++)
	{
		arr[i] = Math.random().toString(36).replace('0.','').split('');
	}
	console.log(arr);
}

split();



function compare()
{
	var arr = [];
	for (var i = 0; arr.length < 2; i++)
	{
		arr[i] = Math.random().toString(36).replace('0.','').split('');
	}
	console.log(Math.max(arr[0].length, arr[1].length));

	var com = [];
	for (var t = 0; t < Math.max(arr[0].length, arr[1].length); t++)
	{
		console.log(arr[0][t],':', arr[1][t])
		if (arr[0][t] === arr[1][t])
		{
			com[t] = 1;
		}
		else
		{
			com[t] = 0;
		}
	}
	console.log(com);
	var fs = require('fs');
	var filePath = './writeTo.txt';
	fs.writeFile(filePath, com, function(err)
	{
		if (err) throw err;
	});	
}

compare();


