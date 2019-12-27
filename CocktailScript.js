$(document).foundation();

var recipes = ["margarita", "old fashioned", "negroni"];
var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?"; 
var cockatailParam = {};
var photoURL = "https://api.unsplash.com/search/photos?"; 
var photoParam = {"client_id" : "9ccf8abd6ffa752714d94efb42bacd6237e94e7c0e2662daa68443da0ec9c8d5"};

var drinkNum = 0;

//build URL functions

function buildCocktailUrl(cocktails) {
    cockatailParam.s = cocktails;
    console.log(cockatailParam.s);

    var cocktailCall = cocktailURL + $.param(cockatailParam) ;
    console.log(cocktailCall);

    return cocktailCall;
}

function buildPhotoUrl(photo) {
    photoParam.query = photo + "-cocktail";
    console.log(photoParam.query);

    var photoCall = photoURL + $.param(photoParam) ;
    console.log(photoCall);

    return photoCall;
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
    } 
}

//build card function
function buildCards(response) {
    if(!recipes) {
        $("#savedHeader").text("You dont have any saved receipes")
    } else {
        $("#savedHeader").text("My Recipes");
        
        var newCell = $("<div>").addClass("cell");
        var newCard = $("<div>").addClass("card");
        var newImg = $("<img>").attr("id", "drink" + drinkNum)
        var newCardDivider = $("<div>").addClass("card-divider");
        var newCardContent = $("<div>").addClass("card-section");
        var newCardHeader = $("<h2>").text(response.drinks[0].strDrink + drinkNum);

        $(".cardContainer").append(newCell);
        newCell.append(newCard);
        newCard.append(newImg, newCardDivider, newCardContent);
        newCardContent.append(newCardHeader);    
    }
}

//AJAX calls for recipes and photos... put into setInterval functions to syncronize API pulls
function getDrinks(){
    var recipeLength = recipes.length - 1;
    console.log(recipeLength)

    var recipeLoop = setInterval(function(){

    var drinkCall = buildCocktailUrl(recipes[recipeLength]);
    recipeLength--;

    $.ajax({
    url: drinkCall,
    method: "GET"
    }).then(function(response){
       drinkNum += 1; 
       console.log(drinkNum);
       console.log(response);
       buildCards(response); 
    })

    if(recipeLength == -1){
        clearInterval(recipeLoop)
    }

    }, 100)

} 

function getPhotos(){
    var recipeLength = recipes.length - 1;
    var drinkNum = 0
    var photoLoop = setInterval(function(){

        var photoCall = buildPhotoUrl(recipes[recipeLength]);
        recipeLength--;

        $.ajax({
            url: photoCall,
            method: "GET"
            }).then(function(photoResponse){
                drinkNum += 1; 
                console.log("#drink" + drinkNum);
                console.log(drinkNum)
                console.log(photoResponse);
                $("#drink" + drinkNum).attr("src", photoResponse.results[1].urls.small)
                    
                })
        if(recipeLength == -1){
        clearInterval(photoLoop)
    }
    }, 100)
        
}    
getDrinks();
setTimeout(getPhotos, 1000)
