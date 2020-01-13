$(document).foundation();

var query;
var recipes;
var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?"; 
var cockatailParam = {};
var photoURL = "https://api.unsplash.com/search/photos?"; 
var photoParam = {"client_id" : "9ccf8abd6ffa752714d94efb42bacd6237e94e7c0e2662daa68443da0ec9c8d5"};

var drinkNum = 0;
var photoRecipeName = [];

var searchValue = "";
var searchResults = [];

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

    localStorage.setItem("savedRecipes", JSON.stringify(recipes)) 

};

function getRecipe(){
    var storedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    console.log(storedRecipies)

    if(storedRecipes){
        recipes = storedRecipes;
        console.log(recipes)
    } 
}

//build card function
function buildCards(response) {
  
    $("#savedHeader").text("My Recipes");
    
    var newCell = $("<div>").addClass("cell");
    var newCard = $("<div>").addClass("card");
    var anchorTag = $("<a>").attr("href", "Elijah-Docs/drinkinfo.html");
    var newImg = $("<img>").attr("id", "drink" + drinkNum).attr("src",response.drinks[0].strDrinkThumb).addClass("drinkpic").attr("dataid", response.drinks[0].idDrink);
    var newCardContent = $("<div>").addClass("card-section");
    var newCardHeader = $("<h4>").text(response.drinks[0].strDrink);

    $(".cardContainer").append(newCell);
    newCell.append(newCard);
    anchorTag.append(newImg);
    newCard.append(anchorTag, newCardContent);
    newCardContent.append(newCardHeader);    

}

//AJAX calls for recipes and photos... put into setInterval functions to syncronize API pulls
function getDrinks(){
    if(typeof recipes == "undefined"){
        recipes = JSON.parse(localStorage.getItem("savedRecipes"));
        recipes = [...new Set(recipes)]
        console.log(recipes);
    }
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

        }, 700)

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
                $("#drink" + drinkNum).attr("src", photoResponse.results[3].urls.small)
                    
                })
        if(photoRecipeNameLength == photoRecipeName.length){
        clearInterval(photoLoop)
    }
    }, 100)
        
}    
getDrinks();
console.log(photoRecipeName);
 //setTimeout(getPhotos, 100);


//search bar 
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
            searchResults.push(response.drinks[i]);
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
            searchResults.push(response.drinks[i]);
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
            searchResults.push(response.drinks[i]);
        
    }}

        console.log(searchResults);
        localStorage.setItem("results", JSON.stringify(searchResults));
    })

}

$("#submitbtn").on("click", function(event) {
    event.preventDefault();
    searchValue = $("#searchValue").val().trim();
    searchResponse(searchValue);
    localStorage.setItem("query","results");
    localStorage.setItem("title",searchValue);
    
    setTimeout(() => {
        window.location.href = "search.html";
    },700);
});

$("#searchValue").keypress(function(event) {
    if (event.which == 13) {        
        event.preventDefault();
        searchValue = $("#searchValue").val().trim();
        searchResponse(searchValue);
        localStorage.setItem("query","results");
        localStorage.setItem("title",searchValue);
        
        setTimeout(() => {
            window.location.href = "search.html";
        },700);
    }
});

function linkClick(id) {
    localStorage.setItem("results",id);
    window.location.href = "Elijah-Docs/drinkinfo.html";
}

function luckClick() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response)
        localStorage.setItem("results",response.drinks[0].idDrink);
    })
    setTimeout(() => {
            window.location.href = "Elijah-Docs/drinkinfo.html"; 
    }, 700);
}

