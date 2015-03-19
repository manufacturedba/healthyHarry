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
        source.damage(1);
        log.debug('[+] Health Left: ' + source.health);
    });
    log.debug('Finish create state');
};
