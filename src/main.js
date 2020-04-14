// // User Interface Logic -->
import { CardSet } from './memory';
// import matchingCard from './memory';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//event listeners functions!

// var card1 = $(this).val(); --> "7"
// var card2 = $(this).val(); --> "9"

$(document).ready(function() {
  //event listeners here
  $(".cards").click(function(){
    $(this).removeClass(".cards");
    var card1 = $(this).val(); 
    var card2 = $(this).val();
    var setOne = new CardSet (card1,card2);
    var matching = setOne.matchingCard();
    
    if (setOne.show.length === 2) {
      $(this).addClass(".matching");
    } else if (setOne.show.length === 0) {
      $(this).addClass(".cards");
    }

    // console.log("card1", card1);
    // console.log("card2", card2);
    // console.log("setOne", setOne);
    // // output 
    $("#output").html(matching);  
  });
});

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

// var gameMatrix = [card1, card2, card3, card4]
  // gameMatrix.forEach(function(thing){
  //   if(thing has value)
  //   $("#" + thing).html("<div class="col">
  //       <div class="set-one cards">
  //         <!-- <p><img src="/img/backside.png" alt="back of card"></p>
  //         <p><img src="/img/ace.png" alt="front-ace"></p> -->
  //       </div>
  //     </div>")
  // })