
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
                fallDrinkList.push(response.drinks[0]);
           
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
                winterDrinkList.push(response.drinks[0]);
           
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
                springDrinkList.push(response.drinks[0]);
            
           
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
                summerDrinkList.push(response.drinks[0]);
            
           
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
                hotDrinkList.push(response.drinks[0]);
            
           
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
                frozenDrinkList.push(response.drinks[0]);
            
           
            console.log(frozenDrinkList);
            localStorage.setItem("Frozen Drink List", JSON.stringify(frozenDrinkList));
        }})
    }
};


function saltyDrinks (){
    var queryList = ["Salty Dog",
    "Salted Toffee Martini",
    ];
    
    saltyDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                saltyDrinkList.push(response.drinks[0]);
            
           
            console.log(saltyDrinkList);
            localStorage.setItem("Salty Drink List", JSON.stringify(saltyDrinkList));
        }})
    }
};

function sweetDrinks (){
    var queryList = ["Sweet Bananas",
    "Sweet Sangria",
    "Sweet Tooth" ,
    "Lassi - Sweet" ,
    "Amaretto Sweet & Sour",

    ];
    
    sweetDrinkList = [];
    for (var i = 0; i < queryList.length; i++){
        var query = queryList[i];
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;
 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            
           if (response.drinks !=null){ 
                sweetDrinkList.push(response.drinks[0]);
            
           
            console.log(sweetDrinkList);
            localStorage.setItem("Sweet Drink List", JSON.stringify(sweetDrinkList));
        }})
    }
};

function sourDrinks (){
    var queryList = ["Boston Sour",
    "Bourbon Sour",
    "Brandy Sour" ,
    "Gin Sour" ,
    "New York Sour",
    "Rum Sour",
    "Scotch Sour",
    "Stone Sour",

    ];



sourDrinkList = [];
for (var i = 0; i < queryList.length; i++){
    var query = queryList[i];
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
       if (response.drinks !=null){ 
            sourDrinkList.push(response.drinks[0]);
        
       
        console.log(sourDrinkList);
        localStorage.setItem("Sour Drink List", JSON.stringify(sourDrinkList));
    }})
}
};

function bitterDrinks (){
    var queryList = ["Negroni",
    "Americano",
    "Bermuda Highball" ,
    "English Highball" ,
    "Boulevardier",

    ];



bitterDrinkList = [];
for (var i = 0; i < queryList.length; i++){
    var query = queryList[i];
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
       if (response.drinks !=null){ 
            bitterDrinkList.push(response.drinks[0]);
        
       
        console.log(bitterDrinkList);
        localStorage.setItem("Bitter Drink List", JSON.stringify(bitterDrinkList));
    }})
}
};

function umamiDrinks (){
    var queryList = ["Bloody Mary",
    "Dirty Martini",
    "Bobby Burns Cocktail" ,
    

    ];



umamiDrinkList = [];
for (var i = 0; i < queryList.length; i++){
    var query = queryList[i];
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+query;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        
       if (response.drinks !=null){ 
            umamiDrinkList.push(response.drinks[0]);
        
       
        console.log(umamiDrinkList);
        localStorage.setItem("Umami Drink List", JSON.stringify(umamiDrinkList));
    }})
}
};




function fallDrinksClick(){
    fallDrinks();
    localStorage.setItem("title","Fall Drinks");
    localStorage.setItem("query","Fall Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function winterDrinksClick(){
    winterDrinks();
    localStorage.setItem("title","Winter Drinks");
    localStorage.setItem("query","Winter Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function springDrinksClick(){
    springDrinks();
    localStorage.setItem("title","Spring Drinks");
    localStorage.setItem("query","Spring Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function summerDrinksClick(){
    summerDrinks();
    localStorage.setItem("title","Summer Drinks");
    localStorage.setItem("query","Summer Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function hotDrinksClick(){
    hotDrinks();
    localStorage.setItem("title","Hot Drinks");
    localStorage.setItem("query","Hot Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function frozenDrinksClick(){
    frozenDrinks();
    localStorage.setItem("title","Frozen Drinks");
    localStorage.setItem("query","Frozen Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function saltyDrinksClick(){
    saltyDrinks();
    localStorage.setItem("title","Salty Drinks");
    localStorage.setItem("query","Salty Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}
function sweetDrinksClick(){
    sweetDrinks();
    localStorage.setItem("title","Sweet Drinks");
    localStorage.setItem("query","Sweet Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}


function sourDrinksClick(){
    sourDrinks();
    localStorage.setItem("title","Sour Drinks");
    localStorage.setItem("query","Sour Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}

function bitterDrinksClick(){
    bitterDrinks();
    localStorage.setItem("title","Bitter Drinks");
    localStorage.setItem("query","Bitter Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}

function umamiDrinksClick(){
    umamiDrinks();
    localStorage.setItem("title","Umami Drinks");
    localStorage.setItem("query","Umami Drink List");
    setTimeout(() => {
            window.location.href = "search.html";
    }, 1000);
    
}







