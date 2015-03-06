var Game = function(height, width, element){

    var game = new Phaser.Game(width, height, Phaser.AUTO, element || '', {
        preload: preload,
        create: create,
        update: update
    });

    var cursors, sprite;

    function preload(){
        game.load.atlasJSONHash('atlas', 'static/spritesheet.png', 'static/sprites.json');
    }

    function create(){
        sprite = game.add.sprite(0, height - 50, 'atlas', 'man1');
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.height = 50;
        sprite.width = 50;
        cursors = game.input.keyboard.createCursorKeys();
    }

    function update(){
        sprite.body.velocity.setTo(0, 0);
        if(cursors.left.isDown) sprite.body.velocity.x = -50;
        if(cursors.right.isDown) sprite.body.velocity.x = 50;
    }
};
