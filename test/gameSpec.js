describe("Game", function(){
    "use strict";

    var gameFn = Game;

    it("should have Phaser access", function(){
        expect(Phaser).not.beUndefined;
    });

    it("should exist", function(){
        expect(typeof gameFn).toBe("function");
    });
})
