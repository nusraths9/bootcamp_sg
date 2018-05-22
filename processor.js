// Processer function implementation

var processor = function() 
{
};
var pro = new processor();
var arr = [];
var cases = []; 					
// Add test cases

function testCases()
{
	const readline = require('readline');
	const fs = require('fs');
	const rl = readline.createInterface(
	{
		input : process.stdin
	});
	rl.on('line', (input) => 
	{
		if (input.trim() != '')
		{
			fs.writeFile('./request.txt', input, function(err)
			{
				if (err) throw console.log('error');
				else 
				{
					readTestCase();
		//			pro.operater(cases[0], [cases[1], cases[2]]);
				}
			});
		}
		else
		{
			console.log('no test case entered');
		}
	rl.close();
	});
}
testCases();
// Read test case from file
function readTestCase()
{
	const fs = require('fs');
	fs.readFile('./request.txt', 'utf8', function(err, data)
	{
		if (err) throw err;
		if (data != '')
		{
		//	var cases = [];
			cases = data.split(',');
			console.log(cases);
			arr = [cases[1],cases[2]];
			console.log(arr);
			pro.operater(cases[0], arr);
		}
	});
}
processor.prototype.add = function(arr)
{
	console.log('Number of Arguments :' +arr.length);
	var sum = 0;
	if (arr.length !== 2)
	{
		console.log('Warning: Unexpected Number of Arguments, x and y')
	}
	else 
	{
		console.log('Arguments :');
		for (var i = 0; i < arr.length; i++)
		{
               		console.log(arr[i]);
			var parsed = parseInt(arr[i],10);
       			if (isNaN(parsed))
			{
				arr[i] = 0;
			
			}
			sum += parsed;
		}

	console.log('-----------------------------');
	console.log('Sum :', sum);
	console.log('* Any thing other than numbers is considered "0"');
	console.log('-----------------------------');
	}
};


processor.prototype.sub = function(arr)
				{

	   
					console.log('Number of Arguments :' +arr.length);
					var sum = 0;
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, x and y')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
			        			if (isNaN(arr[i]))
							{
								arr[i] = 0;
							}
							if (i === 0)
							{
								sum += arr[i];
							}
							else
							{
								sum -= arr[i];
							}
						}

					console.log('-----------------------------');
	        			console.log('Substraction :', sum);
					console.log('* Any thing other than numbers is considered "0"');
	        			console.log('-----------------------------');

	   				}
				};


processor.prototype.mul = function(arr)
				{

	   
					console.log('Number of Arguments :' +arr.length);
					var sum = 0;
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, x and y')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
			        			if (isNaN(arr[i]))
							{
								arr[i] = 0;
							}
							if (i === 0)
							{
								sum += arr[i];
							}
							else
							{
								sum *= arr[i];
							}
						
						}

					console.log('-----------------------------');
	        			console.log('Multiplication :', sum);
					console.log('* Any thing other than numbers is considered "0"');
	        			console.log('-----------------------------');

	   				}
				};


processor.prototype.div = function(arr)
				{

	   
					console.log('Number of Arguments :' +arr.length);
					var sum = 0;
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, x and y')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
			        			if (isNaN(arr[i]))
							{
								arr[i] = 0;
							}
							if (i === 0)
							{
								sum += arr[i];
							}
							else
							{
								sum /= arr[i];
							}
						}

					console.log('-----------------------------');
	        			console.log('Division :', sum);
					console.log('* Any thing other than numbers is considered "0"');
	        			console.log('-----------------------------');

	   				}
				};

processor.prototype.strCat = function(arr)
				{
					
					console.log("String Operation : Concatenation of str1 and str2");
					console.log('Number of Arguments :' +arr.length);
					var sum = "";
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, str1 and str2')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
								sum += arr[i] + " ";
						}

					console.log('-----------------------------');
	        			console.log('String Concatenation :', sum);
	        			console.log('-----------------------------');

	   				}
				};

processor.prototype.indexOf = function(arr)
				{
					
					console.log("String Operation : Index of str2 in str1");
					console.log('Number of Arguments :' +arr.length);
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, str1 and str2')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
						}

						console.log('-----------------------------');
	        				console.log('String Index of "' + arr[1] +'" :', arr[0].indexOf(arr[1]));
	        				console.log('-----------------------------');
					}
				};
processor.prototype.split = function(arr)
				{
					
					console.log("String Operation : Split str1 based on delimeter and store in array");
					console.log('Number of Arguments :' +arr.length);
					if (arr.length !== 2)
					{
						console.log('Warning: Unexpected Number of Arguments, str1 and str2(dilimiter)')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
						}
						var split_arr = arr[0].split(arr[1]);
						console.log('-----------------------------');
	        				console.log('String Split based on "' + arr[1] +'" :', split_arr);
	        				console.log('-----------------------------');
					}
				};
processor.prototype.length = function(arr)
				{ 
					
					console.log("String Operation : Number of Characters");
					console.log('Number of Arguments :' +arr.length);
					if (arr.length !== 1)
					{
						console.log('Warning: Unexpected Number of Arguments, str1')
					}
					else 
					{
						console.log('Arguments :');
	        				for (var i = 0; i < arr.length; i++)
		        			{
			                		console.log(arr[i]);
						}
						console.log('-----------------------------');
	        				console.log('String Length :', arr[0].length);
	        				console.log('-----------------------------');
					}
				};

processor.prototype.and = function(arr)
				{
				};
processor.prototype.or = function(arr)
				{
				};
processor.prototype.not = function(arr)
				{
				};
processor.prototype.xor = function(arr)
				{
				};

processor.prototype.readfs = function(arr)
				{
				};
processor.prototype.writefs = function(arr)
				{
				};


processor.prototype.operater = function(opr, arr)
				{
					console.log('Invoking :', cases[0]);
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
					if (opr === 'split')
					{
						pro.split(arr);
					}
					if (opr === 'length')
					{
						pro.length(arr);
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

