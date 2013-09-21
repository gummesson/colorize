(function(document) {

  'use strict';

  var App = App || {};

  var Config = {
    area: document.querySelector('#js-area'),
    submit: document.querySelector('#js-submit'),
    input: document.querySelector('#js-input'),
    list: ['#ff69b4', '#4bb4e6', '#bada55', '#f17e17']
  };

  App.render = function(color) {
    (Config.area).style['background-color'] = color;
  };

  App.bind = function() {
    (Config.submit).addEventListener('click', function() {
      App.render((Config.input).value);
    }, false);
  };

  App.random = function() {
    var randomList = Config.list,
        randomItems = randomList.length,
        randomColor = randomList[Math.floor(Math.random() * randomItems)];
    App.render(randomColor);
  };

  App.init = function() {
    App.bind();
    App.random();
  };

  App.init();

})(window.document);
