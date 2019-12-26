$(document).foundation();

var recipes = ["margarita", "manhattan"];
var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"; 
var cockatailParam = {};
var photoURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"; 
var cockatailParam = {};


//build URL functions

function buildCocktailUrl(cocktails) {
    cockatailParam.s = cocktails;
    console.log(cockatailParam.s);

    var cocktailShallowEncode = $.param(cockatailParam, true);

    cocktailCall = cocktailURL + decodeURIComponent(cocktailShallowEncode) ;
    console.log(cocktailCall);

    return cocktailCall;
}


//get and save functions
function saveRecipe(){
    if(!recipes){
        recipes = []
    } else{
    recipes.push($("#searchInput").val().trim());
    localStorage.setItem("savedRecipes", JSON.stringify(recipes)) 
    }

};

function getRecipe(){
    var storedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    console.log(storedCities)

    if(storedRecipes){
        recipes = storedRecipes;
        console.log(recipes)
        //if creation needed use this format
        // for(i=0 ; i < recipes.length; i++){
        // var newLi = $("<li class = 'list-group-item pastCities btn'>").text(cities[i]);
        // pastSearchesEl.append(newLi)
        // }
    } 
}

//build card function
function buildCards(response) {
    if(!recipes) {
        $("#savedHeader").text("You dont have any saved receipes")
    } else {
        $("#savedHeader").text("My Recipes");
        //put in a for loop or for each function
        var newCell = $("<div>").addClass("cell");
        var newCard = $("<div>").addClass("card");
        var newImg = $("<img>").attr("src", response.drinks[0].strDrinkThumb)
        var newCardDivider = $("<div>").addClass("card-divider");
        var newCardContent = $("<div>").addClass("card-section");
        var newCardHeader = $("<h2>").text(response.drinks[0].strDrink);

        $(".cardContainer").append(newCell);
        newCell.append(newCard);
        newCard.append(newImg, newCardDivider, newCardContent);
        newCardContent.append(newCardHeader);    
    }
}

for(i=0; i < recipes.length; i++) {

    $.ajax({
    url: buildCocktailUrl(recipes[i]),
    method: "GET"
    }).then(function(response) {
        console.log(response);
        buildCards(response);
        console.log(response.drinks[0].strDrink);
    
    })
}


    