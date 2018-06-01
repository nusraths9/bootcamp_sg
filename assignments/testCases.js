
var values = ['./output.txt', './copy.txt', "",'a','Boolean will have value of true or false', 'India is welcoming country', 'India', 
		'Many rivers flow', 'flow',true, false, 0, 1, 1, 0, [], {}, null, 
		+0, -0, 1, 1.5, 2, 3, 4.5 ,5, 6.7, 7, 8, 9, 10.1555, ' ' ];
var opr = ['add','mul', 'div', 'sub', 'strCat', 'indexOf', 'and', 'or', 'xor', 'readfs', 'writefs', 'compare'];
//Run test cases contineously
setInterval(function()
{
	testCases(randomCase, writeToFile, noTestCase, readTestCase);
}, 1000);
//checks whether test case is provided or not
function testCases(input, success, fail, nextAction)
{
	
	if (input().trim() != '')
	{
		success(input(), nextAction);
	}
	else
	{
		fail();
	}
}
//randomly generates test cases from set of values.
function randomCase()
{	
	var testCase = opr[Math.floor(Math.random() * opr.length)] + ',' + 
		   values[Math.floor(Math.random() * values.length)] + ',' +
		   values[Math.floor(Math.random() * values.length)] ;
	//console.log(testCase);
	return testCase;
}
//writes test case to file
function writeToFile(input, nextAction)
{
	const fs = require('fs');
	fs.writeFile('./request.txt', input, function(err)
	{
		if (err) 
		{
			error();
		}
		else 
		{
			//console.log('write success: ' + input);
			nextAction('./request.txt');
		}
	});
}
//if write is suceesss calls operation
function readTestCase(fpath)
{
	const fs = require('fs');
	fs.readFile(fpath, 'utf8', function(err, data)
	{
		if (err)
		{
			error();
		}
		if (data != '')
		{
			var cases = [];
			cases = data.split(',');
			console.log('Input Test Case: ', cases);
			pro.operater(cases[0], [cases[1], cases[2]]);
		}
	});
}
// fail notification
function error()
{
	console.log('error');
}
//no test case notification
function noTestCase()
{
	console.log('no test case entered');
}
function warning()
{
	console.log('Warning: Unexpected Arguments')
}
function array_args(arr)
{
	
	console.log('Number of Arguments :' +arr.length);
	console.log('Arguments :');
	for (var i = 0; i < arr.length; i++)
	{
      		console.log(arr[i]);

	}
}
