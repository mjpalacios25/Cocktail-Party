$(document).foundation();

var recipes = ["11003", "11001", "11007"];
var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?"; 
var cockatailParam = {};
var photoURL = "https://api.unsplash.com/search/photos?"; 
var photoParam = {"client_id" : "9ccf8abd6ffa752714d94efb42bacd6237e94e7c0e2662daa68443da0ec9c8d5"};

var drinkNum = 0;
var photoRecipeName = [];

//build URL functions

function buildCocktailUrl(cocktails) {
    cockatailParam.i = cocktails;
    console.log(cockatailParam.i);

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
    //recipes.push($("#searchInput").val().trim());
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
        var newImg = $("<img>").attr("id", "drink" + drinkNum).addClass("drinkpic");
        var newCardDivider = $("<div>").addClass("card-divider");
        var newCardContent = $("<div>").addClass("card-section");
        var newCardHeader = $("<h4>").text(response.drinks[0].strDrink);

        $(".cardContainer").append(newCell);
        newCell.append(newCard);
        newCard.append(newImg, newCardDivider, newCardContent);
        newCardContent.append(newCardHeader);    
    }
}

//AJAX calls for recipes and photos... put into setInterval functions to syncronize API pulls
function getDrinks(){
    var recipeLength = recipes.length - recipes.length;
    console.log(recipeLength)

    var recipeLoop = setInterval(function(){

    var drinkCall = buildCocktailUrl(recipes[recipeLength]);
    recipeLength++;

    $.ajax({
    url: drinkCall,
    method: "GET"
    }).then(function(response){
       drinkNum += 1; 
       console.log(drinkNum);
       console.log(response);
       buildCards(response); 

       photoRecipeName.push(response.drinks[0].strDrink)
    })

    if(recipeLength == recipes.length){
        clearInterval(recipeLoop)
    }

    }, 100)

} 

function getPhotos(){
    var photoRecipeNameLength = photoRecipeName.length - photoRecipeName.length;
    var drinkNum = 0
    var photoLoop = setInterval(function(){

        var photoCall = buildPhotoUrl(photoRecipeName[photoRecipeNameLength]);
        photoRecipeNameLength++;

        $.ajax({
            url: photoCall,
            method: "GET"
            }).then(function(photoResponse){
                drinkNum += 1; 
                console.log("#drink" + drinkNum);
                console.log(drinkNum)
                console.log(photoResponse);
                $("#drink" + drinkNum).attr("src", photoResponse.results[2].urls.small)
                    
                })
        if(photoRecipeNameLength == photoRecipeName.length){
        clearInterval(photoLoop)
    }
    }, 100)
        
}    
getDrinks();
console.log(photoRecipeName)
setTimeout(getPhotos, 1000)
