var SpriteOptions = function(x, y, height, width, velocity){
    var self = this;
    self.velocity = velocity || 0;
    self.x = x || 0;
    self.y = y || 0;
    self.height = height || 0;
    self.width = width || 0;

    self.setPosition = function(x, y){
        self.x = x;
        self.y = y;
    };

    self.setBody = function(height, width){
        self.height = 0;
        self.width = 0;
    };
};

function GameMaster(game){
    var self = this;
    function noop(){
        //noop
    }

    var physics = Phaser.Physics.ARCADE;
    var playerOpts = new SpriteOptions(100, 0, 50, 50);
    var spriteOpts = new SpriteOptions(100, 0, 25, 25, -100);
    self.spawn = noop;
    var sprites = [];
    var ground;

    var addSprite = function(x, y, text, frame, collide){
        var sprite = game.add.sprite(x, y, text, frame);
        game.physics.enable(sprite, physics);
        if(collide) sprite.body.collideWorldBounds = true;
        if(spriteOpts.height) sprite.height = spriteOpts.height;
        if(spriteOpts.width) sprite.width = spriteOpts.width;
        sprites.push(sprite);
        return sprite;
    };

    self.addCollision = function(source, target, fn){
        if(!game.collisions) game.collisions = [];
        game.collisions.push([source, target, fn]);
    };

    self.checkCollisions = function(){
        for(var i = 0, j = game.collisions || []; i < j.length;i++){
            game.physics.arcade.collide(j[i][0], j[i][1], j[i][2]);
        }
    };

    self.spawnPlayer = function(){
        ground = addSprite(0, game.height - 50, 'atlas', 'man1', true);
        ground.width = game.width;
        ground.height = 50;
        ground.body.immovable = true;

        var sprite = addSprite(playerOpts.x, game.height - playerOpts.y - 200, 'atlas', 'man1', true);
        if(playerOpts.height) sprite.height = playerOpts.height;
        if(playerOpts.width) sprite.width = playerOpts.width;
        sprite.body.gravity.y = 600;
        var reset = {
            x: playerOpts.x,
            y: game.height - playerOpts.y
        };
        sprite.health = 2;
        self.player = createPlayer(sprite, reset);
        return sprite;
    };

    self.createFoodGroup = function(){
        var grp = game.add.group(null, 'food', true, true, physics);
        return grp;
    };

    self.createSpawner = function(group){
        self.sprite = {
            spawn: function(){
                var sprite = addSprite(game.width + spriteOpts.x, game.height - spriteOpts.height - ground.height, 'atlas', 'man1', false);
                sprite.body.allowGravity = false;
                sprite.body.velocity.x = spriteOpts.velocity;
                if(group) group.add(sprite);
            },
            setVelocity: function(velocity){
                spriteOpts.velocity = velocity;
            }
        };
    };

    function createPlayer(playerSprite, reset){
        var jumptimer = 0;
        playerSprite.jump = function(cursors){
            function update() {
                if (cursors.up.isDown && playerSprite.body.touching.down) {
                    //player is on the ground, so he is allowed to start a jump
                    jumptimer = 1;
                    playerSprite.body.velocity.y = -250;
                } else if (cursors.up.isDown && (jumptimer !== 0)) {
                    //player is no longer on the ground, but is still holding the jump key
                    if (jumptimer > 10) {
                        // player has been holding jump for over 30 frames, it's time to stop him
                        jumptimer = 0;
                    } else {
                        // player is allowed to jump higher (not yet 30 frames of jumping)
                        jumptimer++;
                        playerSprite.body.velocity.y = -250;
                    }
                } else if (jumptimer !== 0) {
                    //reset jumptimer since the player is no longer holding the jump key
                    jumptimer = 0;
                }
            }
            update();
        };
        playerSprite.reset = function(){
            game.physics.arcade.collide(playerSprite, ground);
            playerSprite.x = reset.x;
        };

        playerSprite.events.onKilled.add(function(){
            log.debug('[+] Harry ate too much. Game over.');
            playerSprite.destroy();
        });
        return playerSprite;
    }
}

module.exports = GameMaster;
