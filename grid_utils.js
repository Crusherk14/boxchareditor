// grid operations
module = module.exports = (function () {
var _ = {}

_.from_string = function (s) {
	var list = s.split('\n');
    var lines = []
    for (var i=0;i< list.length;i++) {
    	lines[i] = list[i].split('');
    }
    return lines;
}
_.to_string = function (g) {
	var list = [];
	for (var i=0;i<g.length;i++) {
		list[i] = g[i].join('');
	}
	return list.join('\n');
}

_.rtrim = function (g) {
	for (var i=0;i<g.length;i++) {
		while (g[i][g[i].length-1] === ' ') g[i].pop();
	}
	return g;
}

return _;
})();