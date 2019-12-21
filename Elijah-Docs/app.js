$(document).foundation() 
$( document ).ready(function() {
   
    var search = "old fashioned"
    var queryURL = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=1&namespace=0&format=jsonfm"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);


  });

});
