(function(app) {
  var m = app.add_module('menu');

	m.dom.ready(function() {
		mod.elements({

		});
	});
	m.set_data({

	});

  m.actions = function() {
    m.render();
  };

  m.render = function() {
    alert('render');
  };

  m.run();

})(magic_helper);
