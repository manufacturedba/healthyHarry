module.exports = function create(game){
    var height = 50;
    game.cursors = game.input.keyboard.createCursorKeys();
    var sprite = game.sprites.add(50, game.height - height, 'atlas', 'man1');
};
