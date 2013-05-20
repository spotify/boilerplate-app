require([
  '$api/models',
  '$views/buttons'
], function(models, buttons) {
  'use strict';

  var doPlayButtonForAlbum = function() {
    var album = models.Album.fromURI('spotify:album:2mCuMNdJkoyiXFhsQCLLqw');
    var button = buttons.PlayButton.forItem(album);
    document.getElementById('buttonContainer').appendChild(button.node);
  };

  var doShareButtonForArtist = function() {
    var artist = models.Artist.fromURI('spotify:artist:0gxyHStUsqpMadRV0Di1Qt');
    var button = buttons.ShareButton.forArtist(artist);
    document.getElementById('buttonContainer').appendChild(button.node);
  };

  exports.doPlayButtonForAlbum = doPlayButtonForAlbum;
  exports.doShareButtonForArtist = doShareButtonForArtist;
});
