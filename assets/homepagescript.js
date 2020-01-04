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
            localStorage.setItem("fall Drink List", JSON.stringify(fallDrinkList));
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
            localStorage.setItem("winter Drink List", JSON.stringify(winterDrinkList));
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
            localStorage.setItem("spring Drink List", JSON.stringify(springDrinkList));
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
            localStorage.setItem("summer Drink List", JSON.stringify(summerDrinkList));
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
            localStorage.setItem("hot Drink List", JSON.stringify(hotDrinkList));
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
            localStorage.setItem("frozen Drink List", JSON.stringify(frozenDrinkList));
        }})
    }
};

function saltyDrinks (){

    saltyDrinkList = [];

    
        var query = "salt";
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
        + query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.drinks.length; i++){    
           if (response.drinks !=null){ 
                saltyDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(saltyDrinkList);
            localStorage.setItem("salty Drink List", JSON.stringify(saltyDrinkList));
        })
    
};

function sourDrinks (){

    sourDrinkList = [];

    
    var queryList = ["lemon", "lime", "sour mix", "lemon juice", "lime juice"];

    for (var i = -0; i < queryList.length; i++){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    + queryList[i];

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.drinks.length; i++){    
           if (response.drinks !=null){ 
                sourDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(sourDrinkList);
            localStorage.setItem("sour Drink List", JSON.stringify(sourDrinkList));
        })
    
}};

function bitterDrinks (){

    bitterDrinkList = [];

    
    var queryList = ["aperol", "bitters"];
    

    for (var i = 0; i < queryList.length; i++){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    + queryList[i];

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.drinks.length; i++){    
           if (response.drinks !=null){ 
                bitterDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(bitterDrinkList);
            localStorage.setItem("bitter Drink List", JSON.stringify(bitterDrinkList));
        })
    
}};

function umamiDrinks (){

    umamiDrinkList = [];
    
    var queryList = ["egg", "egg white", "tomato juice", "olive"];
       
    for (var i = 0; i < queryList.length; i++){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    + queryList[i];

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.drinks.length; i++){    
           if (response.drinks !=null){ 
                umamiDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(umamiDrinkList);
            localStorage.setItem("umami Drink List", JSON.stringify(umamiDrinkList));
        })
    
}};

function sweetDrinks (){

    sweetDrinkList = [];
    
    var queryList = ["spiced rum", "banana", "honey", "strawberries", "sugar", "cocoa powder", "vanilla extract", "orange juice", "cranberry juice", "banana liqueur", "chocolate syrup", "kahlua", "pineapple juice", "grenadine"];
       
    for (var i = 0; i < queryList.length; i++){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    + queryList[i];
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            for (var i = 0; i < response.drinks.length; i++){    
           if (response.drinks !=null){ 
                sweetDrinkList.push(response.drinks[i].idDrink);
           }}
            console.log(sweetDrinkList);
            localStorage.setItem("sweet Drink List", JSON.stringify(sweetDrinkList));
        })
    
}};

function random() {
    queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            if (response.drinks !=null){
                localStorage.setItem("random Drink List", JSON.stringify(response.drinks.idDrink));
            };
        })
}

fallDrinks();
winterDrinks();
springDrinks();
summerDrinks();
hotDrinks();
frozenDrinks();
saltyDrinks();
sourDrinks();
bitterDrinks();
umamiDrinks();
sweetDrinks();
random();





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
        
        }
        console.log(searchResults);
        
        localStorage.setItem("results", JSON.stringify(searchResults));
    }})
    
    
    
    var finalFilter = [...new Set(searchResults)];
    console.log(finalFilter);
}

function searchFilter () {
    setTimeout( function(){
    var filter = JSON.parse(localStorage.getItem("results"));
    var finalFilter = [...new Set(filter)];
    console.log(finalFilter);

    localStorage.setItem("results", JSON.stringify(finalFilter));
}, 2000)};

$("#sidebarMenu").on("click", ".quickFilter", function(event) {
    event.preventDefault();

    var quickFilterID = $(this).attr("id") + " Drink List";
    console.log(quickFilterID);

    var filterResults = JSON.parse(localStorage.getItem(quickFilterID));
    console.log(filterResults);
    var finalFilter  = [...new Set(filterResults)];
    console.log(finalFilter);
    localStorage.setItem("results", JSON.stringify(finalFilter));

    
    location.href = "#";

});

$(".orbit-caption").on("click", ".orbitDrink", function(event) {
    event.preventDefault();

    var orbitDrinkID = $(this).attr("id");
    localStorage.setItem("results", orbitDrinkID);
    location.href = "Elijah-Docs/drinkinfo.html" 
});

$("#submitbtn").on("click", function(event) {
    event.preventDefault();
    searchValue = $("#searchValue").val().trim();
    searchResponse(searchValue);

    searchFilter();

    location.href = "#";
});

