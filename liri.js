
// set any environment variables with the dotenv package
require("dotenv").config();

// Dependencies =================================
// code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// Import NPM packages : twitter, node-specify-api, and request.
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var request = require("request");

// Import the File System package for file read/write.
var fs = require("fs");


// Functions =====================================

// Writes to the log.txt file
var getArtistNames = function(artist) {
  return artist.name;
};

// Function to perform a Spotify song search
var spotifyThisSong = function(songName) {
   // access keys information
  var spotify = new Spotify(keys.spotify);

  if (songName === undefined) { 
    songName = "The Sign"; 
  };

  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songArr = [];
      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log("Artist(s): => " + songs[i].artists.map(getArtistNames));
        console.log("The song's name: => " + songs[i].name);
        console.log("A preview link of the song from Spotify: => " + songs[i].preview_url);
        console.log("The album that the song is from: => " + songs[i].album.name);

        songArr.push({
          "Artist(s): => ": songs[i].artists.map(getArtistNames),
          "The song's name: => ": songs[i].name,
          "A preview link of the song from Spotify: => ": songs[i].preview_url,
          "The album that the song is from: => ": songs[i].album.name
        });
      }

      logFileWrite(songArr);
    }
  );
};


// Function to perform a Twitter Search
var myTwitterTweets = function() {
  // access keys information
  var client = new Twitter(keys.twitterKeys);

  var tweetsArr = [];

  var params = {
    screen_name: "Nash Castle"
  };

  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);

        tweetsrArr.push({
          "Tweets: => ": tweets[i].created_at,
          "Tweets text: => ": tweets[i].text
        });
      }

      logFileWrite(tweetsArr);
    }
    console.log("tweet error: ", error);
    //console.log("tweets: ", tweets);
    //console.log("response: ", response);
  });

};

// Function to perform a Movie Search
var movieThisOMBDApi = function(movieName) {
  if (movieName === undefined) { 
    movieName = "Mr Nobody"; 
  };

  // Use the request package to retrieve data from the OMDB API. 
  // The OMDB API requires an API key and may use `trilogy`.
  var ombdArr = [];
  var omdbURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

  request(omdbURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);
      console.log("Title of the movie: => " + jsonData.Title);
      console.log("Year the movie came out: => " + jsonData.Year);
      console.log("IMDB Rating of the movie: => " + jsonData.imdbRating);
      console.log("Country where the movie was produced: => " + jsonData.Country);
      console.log("Language of the movie: => " + jsonData.Language);
      console.log("Plot of the movie: => " + jsonData.Plot);
      console.log("Actors in the movie: => " + jsonData.Actors);

      ombdArr.push({
        "Title of the movie: => ": jsonData.Title,
        "Year the movie came out: => ": jsonData.Year,
        "IMDB Rating of the movie: => ": jsonData.imdbRating,
        "Country where the movie was produced: => ": jsonData.Country,
        "Language of the movie: => ": jsonData.Language,
        "Plot of the movie: => ": jsonData.Plot,
        "Actors in the movie: => ": jsonData.Actors
      });
    }

    logFileWrite(ombdArr);

  });
};


// Function -- takes in a command based on the random text file that was created
// node liri.js do-what-it-says
// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// Feel free to change the text in that document to test out the feature for other commands.
var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);

    var randomDataArr = data.split(",");

    if (randomDataArr.length === 2) {
      commandEntered(randomDataArr[0], randomDataArr[1]);
    }
    else if (randomDataArr.length === 1) {
      commandEntered(randomDataArr[0]);
    }
  });
};

// Function with switch/case for which command is to be executed
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says
var commandEntered = function(commandEntered, dataEntered) {
  switch (commandEntered) {
    case "my-tweets":
      myTwitterTweets();
      break;
    case "spotify-this-song":
      spotifyThisSong(dataEntered);
      break;
    case "movie-this":
      movieThisOMBDApi(dataEntered);
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("LIRI only knows the following commands: my-tweets, spotify-this-song, movie-this and do-what-it-says");
  }
};

var logFileWrite = function(data) {
  fs.appendFile("log.txt", "\r\n\r\n");
  fs.appendFile("log.txt", JSON.stringify(data), function(err) {
    if (err) {
      return console.log(err);
    }
  fs.appendFile("log.txt", "\r\n\r\n");
  console.log("log.txt was updated!");
  });
};

// Function which takes in command line arguments and executes the commandEntered function to determine which command is to be processed
// node liri.js my-tweets - This will show your last 20 tweets and when they were created at in your terminal/bash window.
// node liri.js spotify-this-song '<song name here>'
// node liri.js movie-this '<movie name here>'

var mainInit = function(argOne, argTwo) {
  commandEntered(argOne, argTwo);
};

// Main =====================================
mainInit(process.argv[2], process.argv[3]);
