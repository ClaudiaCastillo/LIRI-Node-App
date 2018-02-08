# LIRI Bot (Node App)
LIRI is a Language Interpretation and Recognition Interface

### Overview

This assignment is to make LIRI. LIRI is like iPhone's SIRI. 
However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. 
LIRI will be a command line node app that takes in parameters and gives back data.

### Before Begining

1. Make an alias account and add a few tweets to it!

2. Make a new GitHub repository called liri-node-app and clone it to your computer.

3. To retrieve the data that will power this app, send requests to the Twitter, Spotify and OMDB APIs. These Node packages are used in the assignment.

   * [Twitter](https://www.npmjs.com/package/twitter) 
   * [Spotify](https://www.npmjs.com/package/node-spotify-api)   
   * [Request](https://www.npmjs.com/package/request) -- Use Request to grab data from the [OMDB API](http://www.omdbapi.com).
   * [DotEnv](https://www.npmjs.com/package/dotenv)
     
### Instructions

1. Navigate to the root of the project and run "npm init -y" to initialize a package.json file for the project. The package.json file is required for installing third party npm packages and saving their version numbers. It is required to run your code after cloning your project.

2. Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.

	node_modules
	.DS_Store
	.env


3. Make a JavaScript file named "key.js" to maintain exports for twitter and spotify Keys/ID.

4. Next, create a file named ".env", replacing the values with your API keys once you have them:

	This file will be used by the "dotenv" package to set what are known as environment variables to the global "process.env" object in node. These are values that are meant to be specific to the computer that node is running on, and since we are gitignoring this file, they won't be pushed to github and will keep the API key information private. If someone wanted to clone your app from github and run it themselves, they would need to supply their own `.env` file for it to work.

5. Get Twitter API keys by following these steps:

   * Step One: Visit <https://apps.twitter.com/app/new>
   
   * Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. 
   
   * Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret.      
     -- Copy and paste them into your .env file.
   
   * Step Four: At the bottom of the page, click the "create my access token" button to get your access token key and secret.     
     -- Copy the access token key and secret displayed at the bottom of the next screen and Paste them into your .env file.

6. Make a file called "random.txt".

   * Inside of random.txt put the following: spotify-this-song,"I Want it That Way"

7. Make a JavaScript file named "liri.js".

8. At the top of the liri.js file, add code to read and set any environment variables with the dotenv package: require("dotenv").config();

9. Add the code required to import the keys.js file and store it in a variable.

10. Make it so liri.js can take in one of the following commands:

    * my-tweets
    * spotify-this-song
    * movie-this
    * do-what-it-says

### What Each Command Should Do

1. node liri.js. my-tweets

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. node liri.js spotify-this-song <song name>

   * This will show the following information about the song in your terminal/bash window
     -- Artist(s)
     -- The song's name
     -- A preview link of the song from Spotify
     -- The album that the song is from

   * If no song is provided then the program will default to "The Sign" by Ace of Base.
   
   * Utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package in order to retrieve song information from the Spotify API.
   
   * Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. Follow these steps in order to generate a **client id** and **client secret**:
	   -- Step One: Visit <https://developer.spotify.com/my-applications/#!/>
	   -- Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
	   -- Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
	   -- Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

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
   
   * Use the request package to retrieve data from the OMDB API. 

4. node liri.js do-what-it-says
   
   * Using the "fs" Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
     * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
     
     * Feel free to change the text in that document to test out the feature for other commands.


