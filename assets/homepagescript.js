var searchValue = "";
var searchResults = [];
var fallDrinkList = [];
var winterDrinkList = [];
var springDrinkList = [];
var summerDrinkList = [];
var hotDrinkList = [];
var frozenDrinkList = [];
var saltyDrinkList = [];
var sweetDrinkList = [];
var sourDrinkList = [];
var umamiDrinkList = [];

function fallDrinks (){
    var queryList = ["Apple Cider Punch",
    "Bloody Punch",
    "Espresso Rumtini",
    "Gluehwein",
    "Irish Coffee",
    "Zinger"];

    fallDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                fallDrinkList.push(response.drinks[0].idDrink);
           
            console.log(fallDrinkList);
            localStorage.setItem("Fall Drink List", JSON.stringify(fallDrinkList));
        }})
    }
};

function winterDrinks (){
    var queryList = ["Baby Eskimo",
    "Cranberry Cordial",
    "Egg Nog #4",
    "Old Fashioned",
    "Jam Donut",
    "Godchild"];

    winterDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                winterDrinkList.push(response.drinks[0].idDrink);
           
            console.log(winterDrinkList);
            localStorage.setItem("Winter Drink List", JSON.stringify(winterDrinkList));
        }})
    }
};

function springDrinks (){
    var queryList = ["Bloody Mary",
    "Citrus Coke",
    "Frisco Sour",
    "Hunter's Moon",
    "Irish Spring",
    "Stone Sour"];

    springDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                springDrinkList.push(response.drinks[0].idDrink);
            
           
            console.log(springDrinkList);
            localStorage.setItem("Spring Drink List", JSON.stringify(springDrinkList));
        }})
    }
};

function summerDrinks (){
    var queryList = ["Aloha Fruit Punch",
    "Barracuda",
    "Daiquiri",
    "Long Island Iced Tea",
    "Oreo Mudslide",
    "Shanghai Cocktail"];

    summerDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                summerDrinkList.push(response.drinks[0].idDrink);
            
           
            console.log(summerDrinkList);
            localStorage.setItem("Summer Drink List", JSON.stringify(summerDrinkList));
        }})
    }
};

function hotDrinks (){
    var queryList = ["Almond Chocolate Coffee",
    "Amaretto Tea",
    "Apple Cider Punch #1",
    "Castillian Hot Chocolate",
    "Fuzzy Asshole",
    "H.D.",
    "Hot Chocolate to Die for",
    "Hot Creamy Bush",
    "Irish Coffee",
    "Jamaican Coffee",
    "Karsk",
    "Kill the cold Smoothie",
    "Kioki Coffee",
    "Melya",
    "Orange Scented Hot Chocolate",
    "Swedish Coffee",
    "Tennesee Mud",
    "Zorro"];

    hotDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                hotDrinkList.push(response.drinks[0].idDrink);
            
           
            console.log(hotDrinkList);
            localStorage.setItem("Hot Drink List", JSON.stringify(hotDrinkList));
        }})
    }
};

function frozenDrinks (){
    var queryList = ["Amaretto Shake",
    "Artic Mouthwash",
    "Bailey's Dream Shake",
    "Banana Daiquiri",
    "Banana Milk Shake",
    "Banana Strawberry Shake",
    "Banana Strawberry Shake Daiquiri-type",
    "Black Forest Shake",
    "Blue Hurricane",
    "Chocolate Black Russian", 
    "Chocolate Monkey",
    "Frozen Daiquiri",
    "Frozen Mint Daiquiri",
    "Frozen Pineapple Daiquiri",
    "Boozy Snickers Milkshake",
    "Holloween Punch",
    "Whitecap Margarita",
    "Oreo Mudslide",
    "Pina Colada"];
    
    frozenDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                frozenDrinkList.push(response.drinks[0].idDrink);
            
           
            console.log(frozenDrinkList);
            localStorage.setItem("Frozen Drink List", JSON.stringify(frozenDrinkList));
        }})
    }
};

function saltyDrinks (){

    saltyDrinkList = [];

    
        var query = "salt";
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+ query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < queryList.length; i++){    
           if (response.drinks !=null){ 
                saltyDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(saltyDrinkList);
            localStorage.setItem("Salty Drink List", JSON.stringify(saltyDrinkList));
        })
    
};

function sweetDrinks (){

    saltyDrinkList = [];

    
        var query = "salt";
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+ query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < queryList.length; i++){    
           if (response.drinks !=null){ 
                saltyDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(saltyDrinkList);
            localStorage.setItem("Salty Drink List", JSON.stringify(saltyDrinkList));
        })
    
};

fallDrinks();
winterDrinks();
springDrinks();
summerDrinks();
hotDrinks();
frozenDrinks();
saltyDrinks();

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