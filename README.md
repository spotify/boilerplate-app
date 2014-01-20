boilerplate-app
===============

This is a boilerplate app that contains the minimum required code to create
a Spotify app. It also contains a few simple examples of how to use some of
our APIs.

## Running the application
To run the application your Spotify account needs to have the developer flag
set. You can find out how to activate the developer flag [here](https://developer.spotify.com/technologies/apps/#developer-account).

Clone this repository in your Spotify workspace directory. If you haven't got a Spotify directory, read about where to create it [here](http://developer.spotify.com/technologies/apps/guidelines/developer/#creatinganapp). Cloning will create a subfolder called boilerplate-app. 

You can access the application (restart the Spotify desktop client if you have not done so) by typing in `spotify:app:boilerplate-app` in the search field.
Read more about this in the [Spotify Developer Guidelines](http://developer.spotify.com/technologies/apps/guidelines/developer/).

## Contents

The **[manifest.json](https://github.com/spotify/boilerplate-app/blob/master/manifest.json)** file describes the application. For this app we have chosen
to support all languages available.

**[index.html](https://github.com/spotify/boilerplate-app/blob/master/index.html)** loads the **[scripts/main.js]((https://github.com/spotify/boilerplate-app/blob/master/scripts/main.js)** file, our entry point to develop applications. In turn, main.js loads  four script files, each showcasing a part of the Spotify Apps API.

* **[scripts/button-example.js](https://github.com/spotify/boilerplate-app/blob/master/scripts/button-example.js)** shows how to create some of the buttons our framework
supports. Find out more about buttons in the [Views Framework documentation](https://developer.spotify.com/technologies/apps/docs/preview/views/buttons.html).

* **[scripts/cover-example.js](https://github.com/spotify/boilerplate-app/blob/master/scripts/cover-example.js)** shows how to create a playable cover image for an album.
Find out more about images in the [Views Framework documentation](https://developer.spotify.com/technologies/apps/docs/preview/views/image-image.html).

* **[scripts/language-example.js](https://github.com/spotify/boilerplate-app/blob/master/scripts/language-example.js)** shows how to use our built-in i18n support.
Find out more about localization in our [Spotify Developer Guidelines](http://developer.spotify.com/technologies/apps/guidelines/developer/#localization) or in our
[API Framework documentation](http://developer.spotify.com/technologies/apps/docs/preview/api/api-core-spotifyapi-langmodule.html).

* **[scripts/playlist-example.js](https://github.com/spotify/boilerplate-app/blob/master/scripts/playlist-example.js)** shows how to create a playlist for an album.
Find out more about playlists in the [Views Framework documentation](https://developer.spotify.com/technologies/apps/docs/preview/views/list.html).

## Helpful links

-  [Spotify Developer site](https://developer.spotify.com/)
-  [Spotify Developer Guidelines](http://developer.spotify.com/technologies/apps/guidelines/developer/)
-  [Spotify Apps API](https://developer.spotify.com/technologies/apps/)
