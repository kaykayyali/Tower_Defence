var game = {
	init: function() {
		console.log("Initialized");
		this.set_defaults();
		this.start_game();
	},
	start_game: function() {
		this.generate_tile_map();
		this.generate_chooser();
		this.generate_status();
	},
	set_defaults: function() {
		this.tile_map = $('#tile_map');
		this.board = [
			[2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],
			[1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1],
			[2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[2,1,1,1,2,2,2,2,2,1,1,2,2,2,2,2,1,1,1,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
			[1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
			[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2]
		];
		this.color_map = {
			0: 'black',
			1: 'green',
			2: 'brown',
			3: 'red'
		};
	},
	generate_chooser: function() {
		this.chooser = new Chooser();
	},
	generate_status: function() {
		this.status = new Status();
	},
	generate_tile_map: function() {
		var that = this;
		this.tile_map.empty();
		this.board.forEach(function(row, row_index) {
			row.forEach(function(tile, index) {
				var tile = new Tile(row_index, index, tile, that.tile_map);
			});
		});
	},
	get_color: function(color) {
		return this.color_map[color];
	}
};