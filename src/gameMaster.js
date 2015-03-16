var SpriteOptions = function(x, y, height, width){
    var self = this;
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

    // Mock
    var log = {
        info: console.log,
        debug: console.log,
        error: console.log
    };

    var physics = Phaser.Physics.ARCADE;
    var playerOpts = new SpriteOptions(100, 0, 50, 50);
    var spriteOpts = new SpriteOptions();
    self.spawn = noop;
    var sprites = [];

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
        var sprite = addSprite(playerOpts.x, game.height - playerOpts.y, 'atlas', 'man1', true);
        if(playerOpts.height) sprite.height = playerOpts.height;
        if(playerOpts.width) sprite.width = playerOpts.width;
        var reset = {
            x: playerOpts.x,
            y: game.height - playerOpts.y
        };
        self.player = createPlayer(sprite, reset);
        return sprite;
    };

    self.createFoodGroup = function(){
        var grp = game.add.group(null, 'food', true, true, physics);
        return grp;
    };

    self.createSpawner = function(group){
        self.spawn = function(){
            var sprite = addSprite(game.width + 100, game.height - spriteOpts.height, 'atlas', 'man1', false);
            sprite.body.allowGravity = false;
            sprite.body.velocity.x = -100;
            if(group) group.add(sprite);
        };
    };

    function createPlayer(playerSprite, reset){
        playerSprite.jump = function(){
            playerSprite.body.velocity.y = -250;
        };
        playerSprite.reset = function(){
            playerSprite.x = reset.x;
        };
        return playerSprite;
    }
}

module.exports = GameMaster;
