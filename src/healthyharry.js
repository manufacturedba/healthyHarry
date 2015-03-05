var Game = function(height, width, element){

    var game = new Phaser.Game(height, width, Phaser.AUTO, element | '', {
        preload: preload,
        create: create
    });

    function preload(){
        // pass
    }

    function create(){
        // pass
    }
};
