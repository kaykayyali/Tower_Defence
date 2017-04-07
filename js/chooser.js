var Chooser = function(target) {
	this.state = {
		identifier: '#chooser',
		target: $('#chooser_wrap')
	};
	this.append_self();
	this.append_header();
};

Chooser.prototype.append_self = function() {
	this.state.target.append('<div id="chooser"></div>');
};

Chooser.prototype.append_header = function() {
	$(this.state.identifier).append('<div id="chooser_header">Towers</div>');
};