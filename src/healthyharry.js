var Game = function(height, width, element){
    var Phaser = require('Phaser');

    var states = {
        preload: require('./states/preloadState'),
        create: require('./states/createState'),
        update: require('./states/updateState')
    };

    var game = new Phaser.Game(width, height, Phaser.AUTO, element || '');

    var cursors, sprite;

    registerStates(states);
};

function registerStates(states){
    states.forEach(function(state){
        
    });
}

window.Game = Game;
