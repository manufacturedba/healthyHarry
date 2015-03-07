var Game = function(height, width, element){
    var Phaser = require('phaser');
    console.log(Phaser);
    var preload = require('./states/preloadState'),
        create = require('./states/createState'),
        update = require('./states/updateState');
    console.log(preload);
    var game = new Phaser.Game(width, height, Phaser.AUTO, element || '', {
        preload: preload,
        create: create,
        update: update
    });

    var cursors, sprite;

};

window.Game = Game;
