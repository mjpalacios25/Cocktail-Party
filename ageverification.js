$(document).ready(function() {

$('#submit-age').on('click', function(e){  
e.preventDefault();

var month = $("#input1").val()
var day = $("#input2").val()
var year = $("#input3").val()

month = month.trim();
day = day.trim();
year = year.trim();

var years = moment().diff(`${year}-${month}-${day}`, 'years',false);
alert(years);

});
});