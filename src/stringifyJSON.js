// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	var result = [];
	var newVal;
	var newKey;
	if (typeof obj === 'number' || typeof obj === 'boolean') {
		return String(obj);
	} else if (typeof obj === 'string') {
		return "\"" + obj + "\"";
	} else if (typeof obj === 'object') {
		if (obj === null) {
			return 'null';
			// Check if obj is an Array
		} else if (Array.isArray(obj)) {
			for (var i = 0; i < obj.length; i++) {
				result.push(stringifyJSON(obj[i]));
			}
			result = "[" + result + "]";
			return result;
			// Actions to take if obj is key:value object
		} else {
			for (var key in obj) {
				newKey = stringifyJSON(key);
				newVal = stringifyJSON(obj[key]);
				if (!newVal) {
					return "{}"
				} else {
					result.push(newKey + ":" + newVal);
				}
			}
			result = "{" + result + "}";
			return result;
		}
	}
};
