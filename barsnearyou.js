
function buildCards(response) {
  
  $("#savedHeader").text("Bars Near You");
  
  

  var newCell = $("<div>").addClass("cell");
  var newCard = $("<div>").addClass("card");
  var anchorTag = $("<a>").attr("href", response.url);
  var newImg = $("<img>").addClass("drinkpic").attr("src", response.image_url);
  var newCardContent = $("<div>").addClass("card-section");
  var newCardHeader = $("<h4>").text(response.name);

  $(".cardContainer").append(newCell);
  newCell.append(newCard);
  anchorTag.append(newImg);
  newCard.append(anchorTag, newCardContent);
  newCardContent.append(newCardHeader);    

}

function barsearch (lat,lon){
    
    
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=bars&latitude="+lat+"&longitude="+lon+"&limit=10"
  var API = "PyrHkwEol1agBvXHJF-zq6vB99oEL_WhJsibagLaF-p3jMjfHKdulVlTHMqv9Ll-11-r6FteKJD_qLN6cwZ8veooKKqf62VUUWAgUvE5n3Jus-vbGxC3S0YKqSUaXnYx";

  console.log("yelp url: " + queryURL);
  
  $.ajax({
      url: queryURL,
      headers: {'Authorization': 'Bearer '+ API,},
      method: "GET"
  }).then(function (response) {
      console.log(response)
      for (var i = 0; i<10; i++){
          buildCards(response.businesses[i])
      }
     
      
  })}



function getLocation() {
    // Make sure browser supports this feature
    if (navigator.geolocation) {
      // Provide our showPosition() function to getCurrentPosition
      navigator.geolocation.getCurrentPosition(showPosition);
    } 
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  // This will get called after getCurrentPosition()
  function showPosition(position) {
    // Grab coordinates from the given object
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

    barsearch(lat, lon);
  }

  getLocation();
  showPosition(position);

  function searchResponse (searchValue){
    searchResults.length = 0;

    localStorage.setItem("results", JSON.stringify(searchResults));
   
    console.log(searchValue);
    //query for search by name
    var queryURL1 = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+searchValue;
    //query for search by ingredient
    var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+searchValue;
    //by alcoholic category
    var queryURL3 = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a="+searchValue;

    console.log("by name: " + queryURL1);
    console.log("by ingredient: " + queryURL2);
    console.log("by alcoholic: "+ queryURL3);
    
    $.ajax({
        url: queryURL1,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
       if (response.drinks !=null){ 
        for (var i = 0; i < response.drinks.length; i++){
            searchResults.push(response.drinks[i].idDrink);
        }
       
        console.log(searchResults);
        localStorage.setItem("results", JSON.stringify(searchResults));
    }})

    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
        if (response.drinks !=null){
        for (var i = 0; i < response.drinks.length; i++){
            searchResults.push(response.drinks[i].idDrink);
         }
        
        console.log(searchResults);
        localStorage.setItem("results", JSON.stringify(searchResults));
    }})

    $.ajax({
        url: queryURL3,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
        if (response.drinks !=null){
        for (var i = 0; i < response.drinks.length; i++){
            searchResults.push(response.drinks[i].idDrink);
        
    }}

        console.log(searchResults);
        localStorage.setItem("results", JSON.stringify(searchResults));
    })

}


$("#submitbtn").on("click", function(event) {
    event.preventDefault();
    searchValue = $("#searchValue").val().trim();
    searchResponse(searchValue);
});




