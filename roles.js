var roles = (function(){

var roleFinder = function(base){
	this.base = base;
	this.$base = $(base);
};

roleFinder.prototype = {
	find: function(role) {
		return this.$base.find('[role='+role+']');
	}
};

return function(base) {
	return new roleFinder(base);
};

})();