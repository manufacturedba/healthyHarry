var Game = function(height, width, element){
    var Phaser = require('Phaser');

    var states = {
        preload: require('./states/preloadState'),
        create: require('./states/createState'),
        update: require('./states/updateState')
    };

    var game = new Phaser.Game(width, height, Phaser.AUTO, element || '');
    game.sprites = [];
    game.sprites.add = function(x, y, text, frame, collide){
        var sprite = game.add.sprite(x, y, text, frame);
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        if(collide) sprite.body.collideWorldBounds = true;
        sprite.height = 50;
        sprite.width = 50;
        game.sprites.push(sprite);
        return sprite;
    };
    // Add states later, so we can modify game before running
    game.state.add('state', states, true);
};

window.Game = Game;
