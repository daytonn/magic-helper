describe("Player:", function() {

  describe("Instantiation:", function() {

    var player;
    beforeEach(function() {
      player = new Player('Dayton')
    });

    afterEach(function() {
      player = undefined;
    });

    it("should require a name", function() {
      expect(function() {
        new Player();
      }).toThrow('new Player(name) - name is undefined.');
    });

    it("should have a default life of value 20", function() {
      expect(player.life).toEqual(20);
    });

    it("should have a default poision value of 0", function() {
      expect(player.poision).toEqual(0);
    });

    it("should have a default mana value of 0", function() {
      expect(player.mana).toEqual(0);
    });
  });

  describe("Usage:", function() {

    var player;
    beforeEach(function() {
      player = new Player('Dayton');
    });

    afterEach(function() {
      player = undefined;
    });

    it("should decrement life by 1", function() {
      player.decrement_life();
      expect(player.life).toEqual(19);
    });

    it("should decrement life by n", function() {
      player.decrement_life(5);
      expect(player.life).toEqual(15);
    });

    it("should not allow negative life", function() {
      player.decrement_life(21);
      expect(player.life).toEqual(0);
    });

    it("should increment life by 1", function() {
      player.increment_life();
      expect(player.life).toEqual(21);
    });

    it("should increment life by n", function() {
      player.increment_life(5);
      expect(player.life).toEqual(25);
    });

    it("should increment poision by 1", function() {
      player.increment_poision();
      expect(player.poision).toEqual(1);
    });

    it("should increment poision by n", function() {
      player.increment_poision(5);
      expect(player.poision).toEqual(5);
    });

    it("should decrement poision by 1", function() {
      player.increment_poision();
      player.decrement_poision();
      expect(player.poision).toEqual(0);
    });

    it("should decrement poision by n", function() {
      player.increment_poision(5);
      player.decrement_poision(5);
      expect(player.poision).toEqual(0);
    });

    it("should not allow negative poision", function() {
      player.decrement_poision();
      expect(player.poision).toEqual(0);
    });

    it("should reduce life to zero when poision is 10", function() {
      player.increment_poision(10);
      expect(player.life).toEqual(0);
    });

    it("should increment mana by 1", function() {
      player.increment_mana();
      expect(player.mana).toEqual(1);
    });

    it("should increment mana by n", function() {
      player.increment_mana(5);
      expect(player.mana).toEqual(5);
    });

    it("should decrement mana by 1", function() {
      player.increment_mana();
      player.decrement_mana();
      expect(player.mana).toEqual(0);
    });

    it("should decrement mana by n", function() {
      player.increment_mana(5);
      player.decrement_mana(5);
      expect(player.mana).toEqual(0);
    });
  });

});