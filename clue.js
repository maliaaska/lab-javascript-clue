var mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  occupation: "Lawyer",
  age: 31,
  description: "always willing to help people out -- for a price."
};

var msWhite = {
  firstName: "Doctor",
  lastName: "Orchid",
  occupation: "Biologist",
  age: 25,
  description: "She likes plants"
};

var mrPurple = {
  firstName: "Victor",
  lastName: "Plum",
  occupation: "Video game designer",
  age: 21,
  description: "He is a Billioner"
};

var msRed = {
  firstName: "Casandra",
  lastName: "Scarlet",
  occupation: "Movie Star",
  age: 24,
  description: "Has a terrible secret"
};
var msBlue = {
  firstName: "Eleonor",
  lastName: "Peacock",
  occupation: "Ritch",
  age: 33,
  description: "Spends a lot of Money "
};

var mrYellow = {
firstName: "Jack",
lastName: "Mustard",
occupation: "Football Player",
age: 18,
description: "He is very fast"

};


var characters = [mrGreen, msWhite, mrPurple, msRed, msBlue, mrYellow];

var rope = {
   color: "White",
   howMuchHurts: 1
 };
var knife = {
  color: "silver",
  howMuchHurts: 7
};
var candleStick = {
  color: "Yellow",
  howMuchHurts: 5
};
var dumbel = {
  color:"Black",
  howMuchHurts: 6
};
var poison = {
  color:"Green",
  howMuchHurts: 3
};
var axe = {
  color:"Brown",
  howMuchHurts: 9
};
var bat = {
  color: "Orange",
  howMuchHurts: 7
};
var trophy = {
  color: "Gold",
  howMuchHurts: 2
};
var pistol = {
  color:"black",
  howMuchHurts: 10
};

var weapons = [rope, knife, candleStick, dumbel, poison, axe, bat, trophy, pistol];

var rooms = ["Dinning room", "Conservatory", "Kitchen", "Study", "Library", "Billiard room", "Lounge", "Ballroom", "Hall", "Spa", "living room", "Observatory", "Theatre", "Guest house","Patio"];

function selectRandomCard(deck) {
  var number = Math.floor(Math.random() * deck.length);
  mystery.push(deck[number]);
}

var allDecks = [characters, weapons, rooms];

function selectGameCards(decks){
  decks.forEach(selectRandomCard);

}
var mystery = [];

function revealMystery (solution){
  solution.forEach(function(card){
    console.log(card);
  });

}
