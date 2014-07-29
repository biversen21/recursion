// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var next = document.body.childNodes;
	var node;
	var domWalk = function(node) {
		classCheck(node);
	}
	var classCheck = function(node) {
		if (node.classList.contains(className)) {
			console.log(true);
		} else {
			console.log(false);
		}
	}
	for (var i = 0; i < next.length; i++) {
		console.log(next[i]);
		console.log(next[i].classList);
	}
	domWalk(next[3]);
};
