module.exports = function create(game){
    var gm = game.gm;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 500;
    game.cursors = game.input.keyboard.createCursorKeys();
    var player = gm.spawnPlayer();
    var foodGrp = gm.createFoodGroup();
    gm.createSpawner(foodGrp);
    gm.addCollision(player, foodGrp, function(source, target){
        target.kill();
        console.log('DEAD');
    });
};
