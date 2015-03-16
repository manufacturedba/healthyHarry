describe("Create State", function(){
    var sinon = require('sinon');
    var mockGame = {
        input: {
            keyboard: {
                createCursorKeys: sinon.spy()
            }
        },
        sprites: {
            add: sinon.spy()
        }
    };
    var createState = require('../src/states/createState');
    beforeEach(function(){
        createState(mockGame); // Run state with mockGame
    });

    it('should create controls for game', function(){
        expect(mockGame.input.keyboard.createCursorKeys.called).toBe.true;
    });

    it('should create sprites for game', function(){
        expect(mockGame.sprites.add.called).toBe.true;
    });
});
