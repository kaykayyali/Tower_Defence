var Tile = function(row, index, color, target) {
	this.state = {
		row: row,
		index: index,
		identifier: "#tile_" + row + '_' + index,
		selector: $('#tile_' + row + '_' + index),
		color: game.get_color(color),
		target: target
	};
	this.append_self();
};

Tile.prototype.append_self = function() {
	this.state.target.append('<div class="tile ' + this.state.color + '" id="tile_'+this.state.row + '_' + this.state.index+'"></div>');
	this.attach_listeners();
	return;
};

Tile.prototype.state = function() {
	return this.state;
};

Tile.prototype.attach_listeners = function() {
	var that = this;
	$(this.state.identifier).on('click', that.handle_click.bind(this));
	return;
};

Tile.prototype.handle_click = function(event) {
	console.log('Clicked on', this.state.identifier);
	return;
};

