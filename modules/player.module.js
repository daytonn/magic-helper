var Player = (function() {

  function Player(name) {
    if (is_undefined(name)) {
      throw new Error('new Player(name) - name is undefined.');
    }

    set_defaults.call(this, {
      name: name,
      life: 20,
      poision: 0,
      mana: 0
    });
  }

  Player.prototype.decrement_life = function(n) {
    this.life -= n || 1;
    if (this.life < 0) {
      this.life = 0;
    }
    return this;
  };
  
  Player.prototype.increment_life = function(n) {
    this.life += n || 1;
    return this;
  };

  Player.prototype.increment_poision = function(n) {
    this.poision += n || 1;

    if (this.poision > 10) {
      this.poision = 10;
    }

    if (this.poision === 10) {
      this.life = 0;
    }
    return this;
  };

  Player.prototype.decrement_poision = function(n) {
    this.poision -= n || 1;
    if (this.poision < 0) {
      this.poision = 0;
    }
    return this;
  };

  Player.prototype.increment_mana = function(n) {
    this.mana += n || 1;
    return this;
  };

  Player.prototype.decrement_mana = function(n) {
    this.mana -= n || 1;
    if (this.mana < 0) {
      this.mana = 0;
    }
    return this;
  };
  // private
  function set_defaults(defaults) {
    for (var setting in defaults) {
      if (defaults.hasOwnProperty(setting)) {
        this[setting] = defaults[setting];
      }
    }
  }

  return Player;
})();