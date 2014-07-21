// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
	var tempArr = [];
	var newVal;
	var newKey;
	console.log(obj);
	console.log(typeof obj);
	if (typeof obj==='number') {
		return String(obj);
	} else if (typeof obj === 'boolean') {
		return String(obj);
	} else if (typeof obj === 'string') {
		return "\"" + obj + "\"";
	} else if (typeof obj === 'object') {
		if (obj === null) {
			return 'null';
		} else if (Array.isArray(obj)) {
			for (var val in obj) {
				tempArr.push(stringifyJSON(obj[val]));
			}
			tempArr = "[" + tempArr + "]";
			return tempArr;
		} else {
			for (var key in obj) {
				newKey = stringifyJSON(key);
				newVal = stringifyJSON(obj[key]);
				if (!newVal) {
					return "{}"
				} else {
					tempArr.push(newKey + ":" + newVal);
				}
			}
			tempArr = "{" + tempArr + "}";
			return tempArr;
		}
	}
};
