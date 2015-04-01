describe("Update State", function(){
    var sinon = require('sinon');
    var updateState = require('../src/states/updateState');

    var mockGame = {
        gm: {
            checkCollisions: sinon.spy(),
            player: {
                reset: sinon.spy(),
                jump: sinon.spy()
            },
            sprite: {
                setVelocity: sinon.spy(),
                spawn: sinon.spy()
            }
        },
        time: {
            now: 0
        },
        cursors: {
            'foo':'bar'
        },
        resource: {},
        debug: {
            text: sinon.spy()
        }
    };

    afterEach(function(){
        mockGame.gm.checkCollisions.reset();
        mockGame.gm.player.reset.reset();
        mockGame.gm.player.jump.reset();
        mockGame.gm.sprite.setVelocity.reset();
        mockGame.gm.sprite.spawn.reset();
        mockGame.debug.text.reset();
    });

    describe('running immediately', function(){
        beforeEach(function(){
            updateState(mockGame);
        });

        it('should check for collisions on every update', function(){
            expect(mockGame.gm.checkCollisions.calledOnce).toBe.true;
        });

        it('should reset the player on every cycle', function(){
            expect(mockGame.gm.player.reset.called).toBe.true;
        });

        it('should call jump with game cursors on every cycle', function(){
            expect(mockGame.gm.player.jump.calledWith(mockGame.cursors)).toBe.true;
        });
    })

    it('should spawn a sprite if the game time is greater than the spawn time', function(){
        mockGame.time.now = 1 + (mockGame.resource.spawnTime || 0);
        updateState(mockGame);
        expect(mockGame.gm.sprite.spawn.called).toBe.true;
    });

    it('should not spawn a sprite if the game time is less than the spawn time', function(){
        mockGame.time.now = mockGame.resource.spawnTime;
        updateState(mockGame);
        expect(mockGame.gm.sprite.spawn.called).toBe.false;
    });

    it('should log the spawn time after creating sprite', function(){
        mockGame.time.now = 1 + (mockGame.resource.spawnTime || 0);
        updateState(mockGame);
        expect(mockGame.debug.text.called).toBe.true;
    });

    it('should set the velocity of the next sprites to spawn', function(){
        mockGame.time.now = 1 + (mockGame.resource.spawnTime || 0);
        updateState(mockGame);
        expect(mockGame.gm.sprite.setVelocity.called).toBe.true;
    });
})
