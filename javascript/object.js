// function Dice(sides) { // Constructor function
//   this.sides = sides; // instance var
//   this.roll = function () { // instance method
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber
//   }
// }

function Dice(sides) {
    this.sides = sides;
}

// Allows roll function to be shared among all Dice instances, saving memory
// Commented out function replicates roll function for each instance
Dice.prototype.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var dice = new Dice(6);