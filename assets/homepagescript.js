var searchValue = "";
var searchResults = [];


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