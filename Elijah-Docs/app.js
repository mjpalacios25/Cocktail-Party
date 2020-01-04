$(document).ready(function() {
$(document).foundation() 

var valueKey = JSON.parse(localStorage.getItem("results"));
var queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + valueKey

    $.ajax({
        url: queryURL2,
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
  });

//----------------------------------------------------------------
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
            var drinkId = response.drinks[0].idDrink;          
            var localValue = localStorage.getItem('value1');
            var bevArr = localValue ? JSON.parse(localValue) : [];   
            var drinkId = response.drinks[0].idDrink;
            bevArr.push(drinkId);
            var maxAllowed = 5;
            while (textArr.length > maxAllowed) {    // CREATES MAX NUMBER OF ARRAY VALUES
                 textArr.shift();
            }
            localValue = JSON.stringify(textArr);
            localStorage.setItem('value1', localValue);  
         
        });

  });
});


});