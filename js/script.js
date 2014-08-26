
var adjectives={
  1: "CS Student at Columbia Engineering",
  2: "kid at heart",
  3: "innovator in spirit",
  4: "lover of all things tech & STEM"
};

var newsent;
var ready = true;

$(document).ready(function (){

$('#data1').fadeIn('fast').delay(1000).fadeOut('fast').html(adjectives[1]);

$('#data2').delay(1500).fadeIn('fast').delay(1500).fadeOut('fast').html(adjectives[2]);

$('#data3').delay(3500).fadeIn('fast').delay(1500).fadeOut('fast').html(adjectives[3]);

$('#data4').delay(5500).fadeIn('fast').html(adjectives[4]);

});