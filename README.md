# LIRI Bot (Node App)
LIRI is a Language Interpretation and Recognition Interface


### Overview

This project is to make LIRI. LIRI is like iPhone's SIRI. 
However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. 
LIRI will be a command line node app that takes in parameters and gives back data.

To retrieve the data that will power this app, requests are sent to Twitter, Spotify and OMDB APIs. 
   * [Twitter](https://www.npmjs.com/package/twitter) 
   * [Spotify](https://www.npmjs.com/package/node-spotify-api)   
   * [Request](https://www.npmjs.com/package/request) -- Use Request to grab data from the [OMDB API](http://www.omdbapi.com).
   * [DotEnv](https://www.npmjs.com/package/dotenv)
     
     
### Command Descriptions

Make it so liri.js can take in one of the following commands:

    * my-tweets
    * spotify-this-song
    * movie-this
    * do-what-it-says

1. node liri.js. my-tweets
   * This will show the last 20 tweets and when they were created at in the terminal/bash window.
   
2. node liri.js spotify-this-song <song name>
   * This will show the following information about the song in the terminal/bash window
     -- Artist(s)
     -- The song's name
     -- A preview link of the song from Spotify
     -- The album that the song is from

   * If no song is provided then the program will default to "The Sign" by Ace of Base.

3. node liri.js movie-this <movie name>

   * This will output the following information to the terminal/bash window:
       -- Title of the movie.
       -- Year the movie came out.
       -- IMDB Rating of the movie.
       -- Rotten Tomatoes Rating of the movie.
       -- Country where the movie was produced.
       -- Language of the movie.
       -- Plot of the movie.
       -- Actors in the movie.

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   
   * Uses the request package to retrieve data from the OMDB API. 

4. node liri.js do-what-it-says
   
   * Using the "fs" Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt. 
