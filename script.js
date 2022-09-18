// var letters = [];

// var main = function (input) {
//   letters.push(input);

//   var lettersLenght = letters.length;
//   var myOutputValue = "hello world <br>";

//   var counter = 0;
//   while (counter < lettersLenght) {
//     console.log("counter" + counter);
//     console.log("letter" + letters[counter]);
//     myOutputValue = myOutputValue + letters[counter] + "<br>";
//     counter = counter + 1;
//   }

//   return myOutputValue;
// };

//  "a", "b", "c", "d" "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

// Initialise an empty names array
// var names = [];
// var main = function (input) {
//   // Set a boolean value found to a default value of false
//   var found = false;

//   // Loop over the names array, and set found to true if the input name already exists in the names array
//   var index = 0;
//   while (index < names.length) {
//     var currentName = names[index];
//     if (currentName == input) {
//       found = true;
//     }
//     index = index + 1;
//   }

//   // If no duplicate name was found, add the input name to the names array
//   if (!found) {
//     names.push(input);
//   }

//   // Return the full array of names
//   var myOutputValue = "All names: " + names;
//   return myOutputValue;
// };

var adjectives = [];

var getRandomIndex = function (adjectives) {
  var randomIndex = Math.floor(Math.random() * adjectives.length);
  return randomIndex;
};

var main = function (input) {
  if (input !== "create") {
    var adjectives2 = input.split(" ");
    console.log("adjectives2: ", adjectives2);
    adjectives = adjectives.concat(adjectives2);
    console.log("adjectives: ", adjectives);
    return "Please type 1 adjective word or more (with a space between the words)!<br><br>When you have input as much adjectives as you want, type 'create' to generate the random word.";
  } else if ((input = "create")) {
    var wordGener = getRandomIndex(adjectives);
    console.log(wordGener);
    var finalWord = adjectives[wordGener];
    console.log(finalWord);
    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      finalWord +
      " wife.";
    return madLib;
  }
};
