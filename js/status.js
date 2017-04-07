var Status = function(target) {
	this.state = {
		identifier: '#status',
		target: $('#status_wrap')
	};
	this.append_self();
	this.append_header();
};

Status.prototype.append_self = function() {
	this.state.target.append('<div id="status"></div>');
};

Status.prototype.append_header = function() {
	$(this.state.identifier).append('<div id="status_header">Status</div>');
};