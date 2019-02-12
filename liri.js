require("dotenv").config(); // imports dotenv

var keys = require("./keys.js"); // imports keys.js files

var spotify = new spotify(keys.spotify);

// concert-this uses the Bands In Town Artist Events API
// format: node liri.js concert-this <artist/band name here>

// spotify-this-song
// format: node liri.js spotify-this-song '<song name here>'

// movie-this - use axios to retrieve data from OMDB API
// format: node liri.js movie-this '<movie name here>'

// do-what-it-says
// format: node liri.js do-what-it-says

// BONUS In addition to logging the data to your terminal/bash 
// window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.