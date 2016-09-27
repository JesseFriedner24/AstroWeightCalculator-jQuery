$(document).ready(function() {

 var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];     

planets.reverse();
$.each(planets, function(index, value) {
    $('<option></option>').val(value[1]).html(value[0]).appendTo('#planets');
  });


$( "#btn" ).click(function() {

  var weight = $("#weight").val();
  
  var selplanet = $("#planets option:selected").text();

  var gravity = $("#planets option:selected").val();
  
  var answer = weight * gravity;



  

  
$("#expectedoutput").text ("If you were on " + selplanet + ", your weight would be " + answer  + "lbs!"); 
});
});
