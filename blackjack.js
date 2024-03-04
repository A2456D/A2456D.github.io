let blackjackDeck = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let blackjackHand = [];

function dealBlackjack() {
  blackjackHand = [];
  for (let i = 0; i < 2; i++) {
    blackjackHand.push(drawBlackjackCard());
  }
  displayBlackjackHand();
}

function drawBlackjackCard() {
  return blackjackDeck[Math.floor(Math.random() * blackjackDeck.length)];
}

function displayBlackjackHand() {
  alert(`Your hand: ${blackjackHand.join(', ')}`);
}
