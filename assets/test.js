  
  var results = JSON.parse(localStorage.getItem("results"));
  console.log(results)
  var drinkName = [];
  var drinkPic = [];


 function getDrinks() {for (var i = 0; i <results.length; i++){
    drinkName = [];
    drinkPic = [];
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + results[i];
  $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
        drinkName.push(response.drinks[0].strDrink);
        drinkPic.push(response.drinks[0].strDrinkThumb);

    })}};

function displayDrinks() {
    setTimeout( function(){
    console.log(drinkName);
    for (var i = 0; i <results.length; i++){
        
        $("#container").append(drinkName[i]);
        var image = $("<img>");
        $(image).attr("src",drinkPic[i]);
        $("#container").append(image);
    }}, 800)

}

getDrinks();
displayDrinks();