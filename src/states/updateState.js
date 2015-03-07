module.exports = function update(){
    sprite.body.velocity.setTo(0, 0);
    if(cursors.left.isDown) sprite.body.velocity.x = -50;
    if(cursors.right.isDown) sprite.body.velocity.x = 50;
};
