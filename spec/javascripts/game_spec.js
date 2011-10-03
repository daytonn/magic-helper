describe("Game", function() {

  describe("Instantiation", function() {
    var game;
    beforeEach(function() {
      game = new Game([new Player('Dayton'), new Player('Angeleah')]);
    });

    it ('should require at least two players', function() {
      expect(function() {
        var game = new Game();
      }).toThrow('new Game(players, options) - players is undefined');

      expect(function() {
        var game = new Game([new Player('Dayton')]);
      }).toThrow('new Game(players, options) - you must have at least two players');
    });

    it("should have a settings object", function() {
      expect(game.settings).toBeDefined();
    });

    it("should have a default max_life setting", function() {
      expect(game.settings.max_life).toEqual(20);
    });

    it ('should set the default player life to max_life', function() {
      var custom_game = new Game([new Player('Dayton'), new Player('Angeleah')], {
        max_life: 50
      });
      expect(custom_game.players[0].life).toEqual(50);
    });

    it("should have a default active_player", function() {
      expect(game.active_player === 0 || 1).toBeTruthy();
    });

    it ('should get the active player', function() {
      expect(game.get_active_player().name === 'Dayton' || 'Angeleah').toBeTruthy();
    });
  });

});