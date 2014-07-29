// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	
	var domWalk = function(node) {
		var next = node.childNodes;
		classCheck(node);
		for (var i = 0; i < next.length; i++) {
			domWalk(next[i]);
		}
	}
	
	var classCheck = function(node) {
		if (node.classList) {
			if (node.classList.contains(className)) {
				result.push(node);
			}
		}
	}

	domWalk(document.body);
	return result;
};
