function random()
{
	var opr = ['add','mul', 'div', 'sub'];
	var values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', {}, null, undefined, '', 0, +0, -0, NaN];
	var testCase = '';
	testCase = 	opr[Math.floor(Math.random() * opr.length)] + ',' + 
			values[Math.floor(Math.random() * values.length)] + ',' +  
			values[Math.floor(Math.random() * values.length)];
	console.log(testCase);
}

setInterval(function(){random()}, 1000);
