require("dotenv").config(); // imports dotenv
var fs = require("fs"); // imports filesystem
var axios = require("axios"); // Make XMLHttpRequests from the browser
var keys = require("./keys.js"); // imports keys.js files

// var spotify = new Spotify(keys.spotify);

var nodeArg = process.argv; // get arguments from command line node liri.js <arguments>
console.log(nodeArg);
var nodeCommand = nodeArg[2];
console.log("Command: ", nodeCommand);

var nodeArgString;

var tempArray = [];
for (var i = 3; i< nodeArg.length; i++) {
    tempArray.push(nodeArg[i]);
}
nodeArgString = tempArray.join("+");


console.log("Argument String: ", nodeArgString);

// concert-this uses the Bands In Town Artist Events API
// format: node liri.js concert-this <artist/band name here>

// spotify-this-song
// format: node liri.js spotify-this-song '<song name here>'

// movie-this - use axios to retrieve data from OMDB API
// format: node liri.js movie-this '<movie name here>'
/*
axios.get("http://www.omdbapi.com/?t=" + movName + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // JSON response
    var movieInfo = "Title: " + response.data.Title + "\n";
    movieInfo += "Year: " + response.data.Year + "\n";
    movieInfo = "IMDB Rating: " + response.data.Ratings[0].value + "\n";
    movieInfo = "Rotten Tomatoes Rating: " + response.data.Ratings[1].value + "\n";
    movieInfo = "Country: " + response.data.Country + "\n";
    movieInfo = "Language: " + response.data.Language + "\n";
    movieInfo = "Plot: " + response.data.Plot + "\n";
    movieInfo = "Actors: " + response.data.Actors + "\n";

    console.log(movieInfo);

    // PUSH TO FILE
    addToFile(nodeComand + ":\n" + movieInfo);
  }
);
   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.
*/

// do-what-it-says
// format: node liri.js do-what-it-says

// BONUS In addition to logging the data to your terminal/bash 
// window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.

function addToFile(arg) {
    fs.appendFile("log.txt", arg);
}
/*
fs.writeFile("mymovies.txt", "Interstellar, Tron", function(err) {
    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
    // Otherwise, it will print: "movies.txt was updated!"
    console.log("movies.txt was updated!");
  });
  */


