var $roles = (function(){
	var roleFinder = function(base){
		this.base = base;
		this.$base = $(base);
		this.results = {};
	};
	
	roleFinder.prototype = {
		find: function(role) {
			this.results[role] = this.$base.find('[role='+role+']');
			return this;
		}
	};
	
	return function(base) {
		return new roleFinder(base);
	};

})();