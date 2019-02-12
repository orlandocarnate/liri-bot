require("dotenv").config(); // imports dotenv
var fs = require("fs"); // imports filesystem
var axios = require("axios"); // Make XMLHttpRequests from the browser
var keys = require("./keys.js"); // imports keys.js files

// var spotify = new Spotify(keys.spotify);

var nodeCommand;
var nodeArgString;

// var nodeArg = process.argv;
// console.log(nodeArg);
// console.log("Command: ", nodeCommand);
// var nodeCommand = nodeArg[2];

// var nodeArgString;



// console.log("Argument String: ", nodeArgString);

// get arguments from command line node liri.js <arguments>
function processArgs(arg) {
    var tempArray = [];
    nodeCommand = arg[2];
    for (var i = 3; i < arg.length; i++) {
        tempArray.push(arg[i]);
    }
    nodeArgString = tempArray.join("+");

    switch (nodeCommand) {
        case "movie-this":
            getMyStuff.movieThis(nodeArgString);
            break;
        default:
            console.log("Sorry, I don't know that command.");
            break;



    }

}

var getMyStuff = {
    movieThis: function(queryString) {
        axios.get("http://www.omdbapi.com/?t=" + queryString + "&y=&plot=short&apikey=trilogy").then(
          function(response) {
            // JSON response
            var movieInfo = "Title: " + response.data.Title + "\n";
            movieInfo += "Year: " + response.data.Year + "\n";
            movieInfo += "IMDB Rating: " + response.data.Ratings[0].Value + "\n";
            movieInfo += "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n";
            movieInfo += "Country: " + response.data.Country + "\n";
            movieInfo += "Language: " + response.data.Language + "\n";
            movieInfo += "Plot: " + response.data.Plot + "\n";
            movieInfo += "Actors: " + response.data.Actors + "\n";
        
            console.log(movieInfo);
        
            // PUSH TO FILE
            addToFile(nodeCommand + ":\n" + movieInfo);
          }
        );

    },
}
// concert-this uses the Bands In Town Artist Events API
// format: node liri.js concert-this <artist/band name here>

// spotify-this-song
// format: node liri.js spotify-this-song '<song name here>'

// movie-this - use axios to retrieve data from OMDB API
// format: node liri.js movie-this '<movie name here>'
/*
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
    fs.appendFile("log.txt", arg + "\n", function(err) {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("log.txt file was appended!");
        }
    });
};
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


processArgs(process.argv);