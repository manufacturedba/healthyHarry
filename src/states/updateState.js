var nextJump = 0;
var spawn = 0;
var createState = require('./createState');
module.exports = function update(game){
    if(game.cursors.up.isDown) {
        if(game.time.now > nextJump){
            game.sprites[0].body.velocity.y = -250;
            nextJump = game.time.now + 700;
        }
    }

    if(game.time.now > spawn){
        game.sprites.spawn();
        spawn = game.time.now + Math.random() * 2000 + 2000 / (1 + (game.time.now * 0.001));
        game.debug.text('SPAWN: ', spawn);
    }
};
