module.exports = function update(game){
    game.sprites[0].body.velocity.setTo(0, 0);
    if(game.cursors.left.isDown) game.sprites[0].body.velocity.x = -100;
    if(game.cursors.right.isDown) game.sprites[0].body.velocity.x = 100;
};
