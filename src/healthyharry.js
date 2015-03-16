var Game = function(height, width, element){
    var Phaser = require('Phaser');
    var spriteHeight = 10;
    var playerHeight = 50;
    function noop (){
        //noop
    }
    var GameMaster = require('./gameMaster');
    var states = {
        preload: require('./states/preloadState'),
        create: require('./states/createState'),
        update: require('./states/updateState')
    };

    var game = new Phaser.Game(width, height, Phaser.AUTO, element || '');

    game.gm = new GameMaster(game);
    // Add states later, so we can modify game before running
    game.state.add('state', states, true);
};

window.Game = Game;
