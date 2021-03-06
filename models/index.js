var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/szechuan");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
	mongoose.connect("mongodb://localhost/szechuan");
}

module.exports.Album = require("./album.js");
module.exports.Song = require("./songs.js");
