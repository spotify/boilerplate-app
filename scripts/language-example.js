require([
  '$api/models',
  '/strings/main.lang'
], function(models, mainStrings) {
  'use strict';

  //Setup a short-hand to get translation
  var _ = SP.bind(mainStrings.get, mainStrings);

  var doHelloWorld = function() {
    document.querySelector('h1').innerHTML = _('hello');
  };

  exports.doHelloWorld = doHelloWorld;
});
