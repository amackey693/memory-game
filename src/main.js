// User Interface Logic -->
import { CardSet } from './memory';
import { matchingCard } from './memory';
import './styles.css';

//event listeners functions!

// var card1 = $(this).val(); --> "7"
// var card2 = $(this).val(); --> "9"

$ (document).ready(function() {
  //event listeners here
  $(".cards").addEventListener('click', function(){
    (this).children("p").slideToggle();
    var card1 = $(this).val(); 
    var card2 = $(this).val();
    var setOne = new CardSet (card1,card2);
    var matching = setOne.matchingCard();

    // output 
    $("#").html(matching);  
  });
}):






// $ (document).ready(function() {
//   //event listeners here
//   $("p").on('click', function(){
//     (this).show();
//     var card1 = $(this).val(); 
//     var card2 = $(this).val();
//     var setOne = new CardSet (card1,card2);
//     var matching = setOne.matchingCard();

//     // output 
//     $("#").html(matching);  
//   });
// }):