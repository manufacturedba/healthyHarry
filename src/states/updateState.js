var spawnTime = 0;
var createState = require('./createState');
module.exports = function update(game){
    game.resource.spawnTime = game.resource.spawnTime || spawnTime;
    var gm = game.gm;
    gm.checkCollisions();
    gm.player.reset();

    gm.player.jump(game.cursors);

    if(game.time.now > game.resource.spawnTime){
        gm.sprite.spawn();
        game.resource.spawnTime = game.time.now + (2000 * (1 + game.time.now * 0.0000001 * Math.random()));
        game.debug.text('SPAWN: ', game.resource.spawnTime);
        gm.sprite.setVelocity(-100 - game.time.now / 500 * Math.random());
    }
};
