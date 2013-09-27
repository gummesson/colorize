(function(document) {

  'use strict';

  var App = App || {};

  var config = {
    area: document.querySelector('#js-area'),
    submit: document.querySelector('#js-submit'),
    input: document.querySelector('#js-input'),
    list: ['#ff69b4', '#4bb4e6', '#bada55', '#f17e17']
  };

  App.render = function(color) {
    config.area.style['background-color'] = color;
  };

  App.bind = function() {
    config.submit.addEventListener('click', function() {
      App.render(config.input.value);
    }, false);
  };

  App.random = function() {
    var list = config.list,
        items = list.length,
        color = list[Math.floor(Math.random() * items)];
    App.render(color);
  };

  App.init = function() {
    App.bind();
    App.random();
  };

  App.init();

})(window.document);
