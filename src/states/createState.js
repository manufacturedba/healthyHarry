module.exports = function create(game){
    var height = 50;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 500;
    game.cursors = game.input.keyboard.createCursorKeys();
    var sprite = game.sprites.add(100, game.height - height, 'atlas', 'man1', true);
    game.sprites.spawn = function(){
        var dude = game.sprites.add(game.width + 100, game.height - height, 'atlas', 'man1', false);
        dude.body.allowGravity = false;
        dude.body.velocity.x = -100;
    };
};
