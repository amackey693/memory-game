// Business Logic -->
// for Card Set Constructor : 
function CardSet (card1, card2) {
  this.card1 = card1;
  this.card2 = card2;
  this.show = [];
}

CardSet.prototype.matchingCard = function () {
  if (this.card1 !== this.card2) {
    this.show = [];
  } else if (this.card1 === this.card2)  {
    this.show.push(this.card1 + this.card2);
  }
  return this.show;
};

// - if items clicked on then --> run method
// - add event listeners to 
 

// var card1 = $(this).val(); --> "7"
// var card2 = $(this).val(); --> "9"

var set1 = new CardSet (card1, card2)
var matching = set1.matchingCard();
console.log(matching)


