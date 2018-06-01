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
				console.log(hash[o[key]][k]);
			});
		});
	});
	    return r;
}

var one = [{ id: 1, score: 100 }, { id: 2, score: 200 }, { id: 4, score: 400 }],
    two = [{ id: 2, name: "test1" }, { id: 1, name: "test2" }, { id: 3, name: "test3" }],
    merged = merge([one, two], 'id');

console.log(merged);
