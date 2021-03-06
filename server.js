// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var db = require("./models");
var bodyParser = require('body-parser');

// set EJS as our view engine. This allows us to make dynamic pages.
app.set('port', process.env.PORT || 3000)
app.set('views', './views');
app.set('view engine', 'ejs');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));

/************
 * DATABASE *
 ************/

/*
HARD-CODED DATA
What we've done here is mocked up what a database object would hypothetically look like
if we had one. That's why we've included an idea. We're trying to simulate the data so that
when we do hook up the database later, it's a seamless transition.

First get your routes hooked up and the ejS looking the way you want. When you are
ready to proceed with hooking up the database, go to ./models/album to create a schema.
Then, take a look into the seed.js file to populate some starter data.
*/


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints: This means we are expecting an HTML or EJS page to be rendered
 */



app.get('/', function homepage (req, res) {
  // This albums variable is the array of objects defined above.
  // TODO: Eventually, this should be replaced with a find() call to your database!
  db.Album.find(function(err, dataAlbum) {
    res.render('index', { albums: dataAlbum});
  });
});

// TODO: GET ROUTE for single album (Route has an id in the url. e.g., /:id that can be accessed
// on the request object with req.params.id).

app.get('/api/albums', function (req, res) {
  db.Album.find(function(err, albums){
  res.send(albums)
  });
});

// create is working!
app.post('/api/albums', function (req, res) {
  db.Album.create(req.body).then(function(postAlbum){
    res.send(postAlbum);
  })
});
// TODO: POST ROUTE (NOTE: You can submit a post request directly from an HTML form tag
// using the method and action attributes - no need for AJAX!)


/*
 * JSON API Endpoints: This usually means AJAX has been used to call this route
 */

// TODO: DELETE ROUTE (removes/destroys an album in the DB. Needs to be called from AJAX.)

// TODO: PUT ROUTE (edits/updates the info in the DB. Needs to be called from AJAX.)

/**********
 * SERVER *
 **********/

// listen on port 3000

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })
