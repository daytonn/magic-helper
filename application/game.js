Array.prototype.max = function() {
  return Math.max.apply(Math, this);
};

var Game = (function() {
  function Game(players, options) {

    if (is_undefined(players)) {
      throw new Error('new Game(players, options) - players is undefined');
    }

    if (players.length < 2) {
      throw new Error('new Game(players, options) - you must have at least two players');
    }

    var defaults = {
          max_life: 20
        },
        slf = this,
        rolls = [];

    options = options || {};
    this.settings = {};
    this.players = [];

    merge_objects(defaults, this.settings);
    merge_objects(options, this.settings);

    players.each(function(player) {
      player.life = slf.settings.max_life;
      slf.players.push(player);
    });

    this.active_player = random(0, this.players.length);
  }

  Game.prototype.get_active_player = function() {
    return this.players[this.active_player];
  };

  function merge_objects(src, dest) {
    for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
        dest[prop] = src[prop];
      }
    }
  }

  function random(from, to){
    return Math.floor(Math.random() * (to - from) + from);
  }

  return Game;
})();
