// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	var temp;
	console.log(obj);
	console.log(typeof obj);
	if (typeof obj==='number') {
		return obj.toString();
	} else if (typeof obj === 'boolean') {
		return obj.toString();
	} else if (typeof obj === 'string') {
		return "\"" + obj + "\"";
	} else if (typeof obj === 'object') {
		if (obj === null) {
			return 'null';
		} else if (obj.length === 0) {
			return "[" + obj.toString() + "]";
		} else if (typeof obj[0] === 'number') {
			return "[" + obj.toString() + "]" 
		} else if (typeof obj[0] === 'string') {
			return "[\"" + obj + "\"]";
		}
	}
};
