module.exports = function create(){
    sprite = game.add.sprite(0, height - 50, 'atlas', 'man1');
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.height = 50;
    sprite.width = 50;
    cursors = game.input.keyboard.createCursorKeys();
};
