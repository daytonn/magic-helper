var Player = (function() {

  function Player(name) {
    if (is_undefined(name)) {
      throw new Error('new Player(name) - name is undefined.');
    }

    set_defaults.call(this, {
      name: name,
      life: 20,
      poision: 0,
      red_mana: 0,
      blue_mana: 0,
      green_mana: 0,
      black_mana: 0,
      white_mana: 0,
      generic_mana: 0
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

  Player.prototype.increment_mana = function(color, n) {
    if (is_undefined(color)) {
      throw new Error('Player.increment_mana(color, n) - color is undefined');
    }
    this[color + '_mana'] += n || 1;
    return this;
  };

  Player.prototype.decrement_mana = function(color, n) {
    if (is_undefined(color)) {
      throw new Error('Player.decrement_mana(color, n) - color is undefined');
    }
    var mana_color = color + '_mana';
    this[mana_color] -= n || 1;
    if (this[mana_color] < 0) {
      this[mana_color] = 0;
    }
    return this;
  };

  Player.prototype.total_mana = function() {
    return (this.red_mana + this.green_mana + this.blue_mana + this.white_mana + this.black_mana + this.generic_mana);
  };

  function set_defaults(defaults) {
    for (var setting in defaults) {
      if (defaults.hasOwnProperty(setting)) {
        this[setting] = defaults[setting];
      }
    }
  }

  return Player;
})();
