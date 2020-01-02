$(document).ready(function() {
$(document).foundation() 
$('#random-button').on('click', function(e) {
   e.preventDefault();
   

  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
          console.log(response);
          var img = response.drinks[0].strDrinkThumb;
          $('#drink-img').attr('src', img)
          $('.bev-title').html(response.drinks[0].strDrink)
          $('.glassware').html(response.drinks[0].strGlass)
          $('.instructions').html(response.drinks[0].strInstructions)

          // APPENDING INGREDIENTS
          var measureObj = response.drinks[0];
          $('.recipe-measure').empty();
          Object.keys(measureObj).forEach(function(key) {
          if (key.charAt(3) == 'M' && measureObj[key] != null || "") {
          $('.recipe-measure').append(measureObj[key] + ": " + "<br>");
          }
        });
          var nameObj = response.drinks[0];
          $('.recipe-writing').empty();
            Object.keys(nameObj).forEach(function(key) {
            if (key.charAt(5) == 'g' && key.charAt(6) == 'r' && nameObj[key] != null) {
            $('.recipe-writing').append(nameObj[key] + "<br>");
            }
          });

        //RECIPE SAVE
        $('.recipe-add').on('click', function(e) {
        e.preventDefault();
    
        var drinkId = JSON.parse(response.drinks[0].idDrink);
        localStorage.setItem("savedrecipes", drinkId);     
        });

  });
});


});