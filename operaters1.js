// Implementaion of Airtametic Operaters



function airtametic(x, y)
{
	
	console.log('Number of Arguments :' +arguments.length);
	console.log('Arguments :');
	for (var i = 0; i < arguments.length; i++)
	{
		console.log(arguments[i]);
	}
	if (isNaN(x)) 
	{
		x = 0;
	}
	if (isNaN(y)) 
	{       
                y = 0;
        }
	var add = x + y;
	var sub = x - y;
	var mul = x * y;
	var div = x / y;
	console.log('-----------------------------');
	console.log('x :' +x);
	console.log('y :' +y);
	console.log(x ,'+', y ,':', add);
	console.log(x ,'-', y ,':', sub);
	console.log(x ,'*', y ,':', mul);
	console.log(x ,'/', y ,':', div);
	console.log('* Any thing other than numbers is considered "0"');
	console.log('-----------------------------');
}

// Test Cases

airtametic(5, 7);

airtametic(10, 5);

airtametic(7);

//airtametic(,7);

airtametic('a', 'b');

airtametic(7, 9.5, 10, 'a');

//airtametic(a, 7);

airtametic(7,"a");

// Logical Operaters

function logical(x, y)
{
	
	console.log('Number of Arguments :' +arguments.length);
	console.log('Arguments :');
	for (var i = 0; i < arguments.length; i++)
	{
		console.log(arguments[i]);
	}
	if (isNaN(x) || isNaN(y))
	{
		console.log('-----------------------------');		
		console.log('Unexpected Results Warning : Non-Numberic arguments passed for Airthmatic');
		console.log('-----------------------------');	
	}
	if (!isNaN(x) && !isNaN(y))
	{
		var add = x + y;
		var sub = x - y;
		var mul = x * y;
		var div = x / y;
		console.log('-----------------------------');
		console.log('x :' +x);
		console.log('y :' +y);
		console.log(x ,'+', y ,':', add);
		console.log(x ,'-', y ,':', sub);
		console.log(x ,'*', y ,':', mul);
		console.log(x ,'/', y ,':', div);
		//console.log('* Any thing other than numbers is considered "0"');
		console.log('-----------------------------');
	}

}

// Test Cases

logical(5, 7);

logical(7);

logical('a', 'b');

logical(7, 9.5, 10, 'a');

logical(7,"a");

// File Operations

function fileWrite()
{
	var fs = require('fs');	
	var filePath="/home/mercyofallah/write_test.txt";
	var content = "There is evidence of rock carvings along the Nile terraces and in desert oases. In the 10th millennium BC, a culture of 				hunter-gatherers and fishers was replaced by a grain-grinding culture. Climate changes or overgrazing around 8000 BC 				began to desiccate the pastoral lands of Egypt, forming the Sahara. Early tribal peoples migrated to the Nile River 				where they developed a settled agricultural economy and more centralised society";
	
	fs.writeFile(filePath, content, function(err)
					{
						if (err) throw err;
						console.log('File Saved!');
					});

}
fileWrite();

function fileRead()
{
	var fs = require('fs');	
	var filePath="/home/mercyofallah/write_test.txt";
	var str = "";
	
	fs.readFile(filePath,  'utf8', function(err, data)
					{
						if (err) throw err;
						console.log('File Read!');
						str = str + data;
						console.log('File Length:', str.length);
						//var count = (str.match(/Nile/g) || []).length;
						console.log('Nile word in this file occured:', (str.match(/Nile/g) || []).length, 'first seen at index:',str.indexOf('Nile'));
						console.log('Egypt word in this file occured:', (str.match(/Egypt/g) || []).length, 'first seen at index:',str.indexOf('Egypt'));
						
					});

	
	

}
fileRead();
