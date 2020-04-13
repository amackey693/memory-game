// Business Logic -->
// for Card Set Constructor : 

export function CardSet (card1, card2) {
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

// CardSet.prototype.pairCheck = function () {
//   if (this.show.length > 2) {
//   this.show.push(this.card2);
// } else if (this.show.length === 2) {
//   this.show.matchingCard();
// }


// - if items clicked on then --> run method
// - add event listeners to 

// var set1 = new CardSet (card1, card2)
// var matching = set1.matchingCard();
// console.log(matching)
// console.log(set1);


