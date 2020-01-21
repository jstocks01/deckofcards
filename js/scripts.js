$(document).ready(function() {
  var suits= ["hearts", "diamonds", "clubs", "spades"];
  var cards= ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  
  var deck = [];

  cards.forEach(function(card) {
    suits.forEach(function(suit) {
    deck.push(card + " of " + suit);
    });
  });

  deck.forEach(function(cardInDeck) {
    $("#output ul").append("<li>" + cardInDeck + "</li>");
  });

});