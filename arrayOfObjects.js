//Read file 
function read ()
{
	const fs = require ('fs');
	var stdObj = [];
	fs.readFile ('./students.txt', 'utf8', function (err, data)
	{	
		if (err)
		{
			console.error ('file read error');
		}
		else
		{
			stdObj = JSON.parse (data);
			avgMarks(stdObj);
			filterMarks(stdObj);
			mapIdMarks(stdObj);
		}
	});
}

read ();

//averge marks of students
function avgMarks (arr)
{
	var initialValue = 0;
	var avgMarks = arr.map ( x => ({student : x.name, 
					marks 	: arr.reduce(function (accumulator, currentValue) 
						{
	                    				return accumulator + currentValue.marks;
	        				}, initialValue)/arr.length
					})
				);
	console.log(avgMarks);
}
//students with marks more than 30
function filterMarks (arr)
{
	var filtered = arr.filter (function (byItem) 
					{
		                		if (byItem.marks >= 30)
						{
			                		return true;
						}
					});
	var stdFilter = filtered.map (y => ({student : y.name, marks : y.marks}));
	console.log(stdFilter);
}

function mapIdMarks (arr)
{
	var count = 0;
	var idMarks = arr.map ( x => ({ id : x.id, marks : x.marks}));
	//sorting
	var sorted = arr.sort (function (a,b)
					{  
						return b.marks - a.marks;
					});
	//rank assigning
	var rank = sorted.map ( x => ({ id : x.id, rank : ++count}));
	console.log(idMarks);
	console.log(rank);
	//merge
	
    	merged = merge([idMarks, rank], 'id');
	console.log(merged);
}

function merge(array, key)
{
        var r = [],
        hash = Object.create(null);
        array.forEach(function (a)
        {
                a.forEach(function (o)
                {
                        if (!hash[o[key]])
                        {
                                hash[o[key]] = {};
                                r.push(hash[o[key]]);
                        }
                        Object.keys(o).forEach(function (k)
                        {
                                hash[o[key]][k] = o[k];
                        });
                });
        });
	return r;
}


