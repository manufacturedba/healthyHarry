var nextJump = 0;
var spawnTime = 0;
var createState = require('./createState');
module.exports = function update(game){
    var gm = game.gm;
    gm.checkCollisions();
    gm.player.reset();

    gm.player.jump(game.cursors);

    if(game.time.now > spawnTime){
        gm.sprite.spawn();
        spawnTime = game.time.now + (2000 * (1 + game.time.now * 0.0000001 * Math.random()));
        game.debug.text('SPAWN: ', spawnTime);
        gm.sprite.setVelocity(-100 - game.time.now / 500 * Math.random());
    }
};
