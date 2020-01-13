$(document).ready(function() {

var ageGet = localStorage.getItem("ageverified");
if (ageGet === true) {
    window.location.replace("homepage.html")
};

$('#submit-age').on('click', function(e){  
e.preventDefault();
console.log("hello")

var month = $("#input1").val()
var day = $("#input2").val()
var year = $("#input3").val()

month = month.trim();
day = day.trim();
year = year.trim();

var years = moment().diff(`${year}-${month}-${day}`, 'years',false);
alert(years);

if (years >= 21) {
localStorage.setItem("age-verified", true)
    window.location.replace("homepage.html")
} else {
    alert("Come back in " + (21 - years) + " year(s)")
    window.location.replace("https://www.chuckecheese.com/");
}
});
});


