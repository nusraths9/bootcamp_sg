// Processer function implementation

var processor = function() 
{
};
processor.prototype.add = function()
				{
					console.log('test');
				};

var arr = [];
processor.prototype.operater = function(opr, arr)
				{
					console.log(opr, arr);
					this.prototype.opr();
				};


var pro = new processor();
pro.operater('add', [2,5]);
