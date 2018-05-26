// Processer function implementation

var processor = function() 
{
};
var pro = new processor();
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
//Processor Operations

processor.prototype.add = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('Addition :', Number(arr[0]) + Number(arr[1]));
	}
};


processor.prototype.sub = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('Substraction :', Number(arr[0]) - Number(arr[1]));
	}
};


processor.prototype.mul = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('Multiplication :', Number(arr[0]) * Number(arr[1]));

	}
};


processor.prototype.div = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('Division :', Number(arr[0]) / Number(arr[1]));

	}
};

processor.prototype.strCat = function(arr)
{ 
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('String Concatenation : '+ arr[0] +' '+ arr[1]);
	}
};

processor.prototype.indexOf = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('Index of '+ arr[0] +' is: '+ arr[1].indexOf(arr[0]));
	}
	
};
processor.prototype.compare = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		for (var i = 0; arr.length < 2; i++)
		{
			arr[i] = Math.random().toString(36).replace('0.','').split('');
		}
		//console.log(Math.max(arr[0].length, arr[1].length));
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
		console.log('Array Comparision : ', com);
	}
	
};
processor.prototype.and = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('AND operation :', Boolean((arr[0]) & (arr[1])));
	}
	
};

processor.prototype.or = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('OR operation :', Boolean((arr[0]) | (arr[1])));
	}
	
};
processor.prototype.xor = function(arr)
{
	if (arr.length !== 2)
	{
		warning();
	}
	else 
	{
		array_args(arr);
		console.log('XOR operation :', Boolean((arr[0]) ^ (arr[1])));
	}
	
};

processor.prototype.readfs = function(arr)
{
	array_args(arr);
	const fs = require('fs');
	for (var i = 0; i < arr.length; i++)
	{
		fs.readFile(arr[i], 'utf8', function(err, data)
		{
			if (err)
			{
				error();
			}
			else if (data != '')
			{
				console.log('Printing File :', data);
			}
		});
			
	}
	
};
processor.prototype.writefs = function(arr)
{
	array_args(arr);
	const fs = require('fs');
	fs.writeFile('./copy.txt', arr, function(err)
	{
		if (err) 
		{
			error();
		}
		else 
		{
			console.log('write success');
		}
	});
	
};

processor.prototype.operater = function(opr, arr)
				{
					console.log('Invoking :', opr);
					console.log('******************************');
					if (opr === 'add')
					{
						pro.add(arr);
					}
					if (opr === 'sub')
					{
						pro.sub(arr);
					}
					if (opr === 'mul')
					{
						pro.mul(arr);
					}
					if (opr === 'div')
					{
						pro.div(arr);
					}
					if (opr === 'strCat')
					{
						pro.strCat(arr);
					}

					if (opr === 'indexOf')
					{
						pro.indexOf(arr);
					}
					if (opr === 'compare')
					{
						pro.compare(arr);
					}
					if (opr === 'and')
					{
						pro.and(arr);
					}
					if (opr === 'or')
					{
						pro.or(arr);
					}
					if (opr === 'xor')
					{
						pro.xor(arr);
					}
					if (opr === 'readfs')
					{
						pro.readfs(arr);
					}
					if (opr === 'writefs')
					{
						pro.writefs(arr);
					}
					console.log('******************************');
					
					
				};


//pro.operater('add', [2]);

//pro.operater('sub', [2,5]);

//pro.operater('mul', [2,5]);
//pro.operater('div', [20,5]);
//pro.operater('strCat', ['Mr.', 'Xyzzzzz']);
//pro.operater('indexOf', ['This is 2018 May Summer Season can feel hell breath', '2018']);
//pro.operater('split', ['known fact there are many rivers flowing accross on the earth, Nile is one of the largest reivers', ' ']);
//pro.operater('length', ['why do you think around us many things why they are there']);

//pro.operater('readfs',['/a/b/c.txt' );
//pro.operater('writefs', ['hi, i am writing now', '/a/b/c.txt']);

