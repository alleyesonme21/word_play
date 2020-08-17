$(document).ready(function() {
  $("#play").submit(function(event) {
  event.preventDefault();
    let inputSentence = $("#sentence").val()
    inputSentence = inputSentence.split(" ");
    let inputfilter = inputSentence.filter(phrase => phrase.length >= 3 );
    let inputReverse = inputfilter.reverse();
    let result = inputReverse.join(" ")
    
    $("#output").prepend(result)
    
    console.log(result )

     });
   });