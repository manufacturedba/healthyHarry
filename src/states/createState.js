module.exports = function create(game){
    log.info('Running create state');
    var gm = game.gm;
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;
    game.cursors = game.input.keyboard.createCursorKeys();
    var player = gm.spawnPlayer();
    var foodGrp = gm.createFoodGroup();
    gm.createSpawner(foodGrp);
    gm.addCollision(player, foodGrp, function(source, target){
        target.kill();
        log.debug('DEAD');
    });
    log.debug('Finish create state');
};
