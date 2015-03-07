module.exports = function create(game){
    var height = 50;
    game.cursors = game.input.keyboard.createCursorKeys();
    var sprite = game.sprites.add(0, game.height - height, 'atlas', 'man1');
    sprite.height = height;
    sprite.width = height;
};
