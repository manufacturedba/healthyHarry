var nextJump = 0;
var spawnTime = 0;
var createState = require('./createState');
module.exports = function update(game){
    var gm = game.gm;
    gm.checkCollisions();
    gm.player.reset();

    if(game.cursors.up.isDown) {
        if(game.time.now > nextJump){
            gm.player.jump();
            nextJump = game.time.now + 700;
        }
    }

    if(game.time.now > spawnTime){
        gm.spawn();
        spawnTime = game.time.now + Math.random() * 2000 + 2000 / (1 + (game.time.now * 0.001));
        game.debug.text('SPAWN: ', spawnTime);
    }
};
