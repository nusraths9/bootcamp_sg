// Processer function implementation

var processor = function() 
{
};
var pro = new processor();
var arr = [];
 					
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
			        			if (isNaN(arr[i]))
							{
								arr[i] = 0;
							}
							sum += arr[i];
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
					console.log('******************************');
					
					
				};


pro.operater('add', [2]);

pro.operater('sub', [2,5]);

pro.operater('mul', [2,5]);
pro.operater('div', [20,5]);
