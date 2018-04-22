/* CLIENT-SIDE JS
 *
 * You will need this file for doing PUT or DELETE requests.
 * As an example, here is how one might implement a delete button
 * 1. Create a big red button that says delete. Give it an id.
 * 2. Listen for the click event on the button (using the id you made for it).
 * 3. In the function that executes on that click event, make an AJAX request to the server to
 *    delete the album. (Note: you will need the album id as part of the url)
 * 4. Make the route on the server side that accepts this request. Make sure it is getting there.
 * 5. Perform the deletion in the database
 *
 */



$(document).ready(function() {
  console.log('app.js loaded!');
  var $albumsList;
  var allAlbums = [];

  

  $('.form-horizontal').on("submit", function(e){
  	e.preventDefault();
	  $.ajax({
	  	method: 'POST',
	  	url: '/api/albums',
	  	data: $(this).serialize(),
      success: newAlbumSuccess,
      error: console.log('nope!')
	   });
	  });

 function newAlbumSuccess(json) {
    $('.form-group input').val('');
    allAlbums.push(json);
    window.location.reload();
  }

});


  // function getAlbumHtml(album) {
  // 	return  `<hr>
  //         <p>
  //           <b>${album.name}</b>
  //           by ${album.artistName}
  //           <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${album._id}>Delete</button>
  //         </p>`;
  // }

  // function getAllAlbumsHtml(albums) {
  // 	return albums.map(getAlbumHtml).join('');
  // }

  // function render() {
  // 	$albumsList.empty();
  // 	var albumsHTML = getAllAlbumsHtml(allAlbums);
  // 	$albumsList.append(albumsHTML);
  // }


