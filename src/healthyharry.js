if(!!window.Minilog){
    window.log = Minilog('game');
    Minilog.enable();
} else {
    console.log('Where the hell is minilog?');
}

var Game = function(height, width, element){
    var Phaser = require('Phaser');
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
    // Use only for keeping track of update state objects that cannot be included
    // in the actual update function
    game.resource = {};
    game.gm = new GameMaster(game);
    // Add states later, so we can modify game before running
    game.state.add('state', states, true);
};

window.Game = Game;
