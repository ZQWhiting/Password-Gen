// Assignment Code Here

// Password Character Arrays
lowercaseArray = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
];
uppercaseArray = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
];
numericArray = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
];
specialCharArray = [
  " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
];

// Password Criteria Input
var criteriaInput = function () {
  // Length Prompt
  var lengthPrompt = function () {
    var length = prompt("Select password length. (Between 8 and 128)");
    if (length >= 8 && length <= 128) {
      return length;
    }
    else {
      alert("Enter a number between 8 and 128");
      lengthPrompt();
    }
  };
  // Lowercase Prompt
  var lowercasePrompt = function () {
    var lowercase = prompt("Include lowercase? (y/n)");
    lowercase = lowercase.toLowerCase();
    if (lowercase === "y") {
      return true;
    }
    else if (lowercase === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      lowercasePrompt();
    }
  };
  // Uppercase Prompt
  var uppercasePrompt = function () {
    var uppercase = prompt("Include uppercase? (y/n)");
    uppercase = uppercase.toLowerCase();
    if (uppercase === "y") {
      return true;
    }
    else if (uppercase === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      uppercasePrompt();
    }
  };
  // Numeric Prompt
  var numericPrompt = function () {
    var numeric = prompt("Include numeric values? (y/n)");
    numeric = numeric.toLowerCase();
    if (numeric === "y") {
      return true;
    }
    else if (numeric === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      numericPrompt();
    }
  };
  // Special Chars Prompt
  var specialCharPrompt = function () {
    var specialChar = prompt("Include special characters? (y/n)");
    specialChar = specialChar.toLowerCase();
    if (specialChar === "y") {
      return true;
    }
    else if (specialChar === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      specialChar();
    }
  };
  // All Inputs Object
  passwordCrit = {
    length: lengthPrompt(),
    lowercase: lowercasePrompt(),
    uppercase: uppercasePrompt(),
    numeric: numericPrompt(),
    specialChar: specialCharPrompt(),
  }
  // If at least one input is true, return all inputs
  if (passwordCrit.lowercase || passwordCrit.uppercase || passwordCrit.numeric || passwordCrit.specialChar) {
    return passwordCrit;
  }
  else {
    alert("Please select at least one character type.");
    criteriaInput();
  }
};

// User Input Validation
var inputValid = function () {

}

// Character Type Selector
var randomCharType = function () {
  var arraySelector = function () {
    switchCaseArray = [
      0, 1, 2, 3
    ];
    // Lowercase Y/N?
    if (!passwordCrit.lowercase) { // If input is false
      for (var i = 0; i < switchCaseArray.length; i++) { // look through switchCaseArray
        if (switchCaseArray[i] === 0) { // and find the number that matches the corresponding switch case
          switchCaseArray.splice(i, 1); // and remove it from the array to prevent it from being selected
        }
      }
    };
    // Uppercase Y/N?
    if (!passwordCrit.uppercase) {
      for (var i = 0; i < switchCaseArray.length; i++) {
        if (switchCaseArray[i] === 1) {
          switchCaseArray.splice(i, 1);
        }
      }
    };
    // Numeric Y/N?
    if (!passwordCrit.numeric) {
      for (var i = 0; i < switchCaseArray.length; i++) {
        if (switchCaseArray[i] === 2) {
          switchCaseArray.splice(i, 1);
        }
      }
    };
    // SpecialChar Y/N?
    if (!passwordCrit.specialChar) {
      for (var i = 0; i < switchCaseArray.length; i++) {
        if (switchCaseArray[i] === 3) {
          switchCaseArray.splice(i, 1);
        }
      }
    }
    return switchCaseArray;
  };
  var arraySelection = arraySelector();
  var selectedArray = arraySelection[Math.floor(Math.random() * arraySelection.length)];
  return selectedArray;
};

// Character Selector
var charSelector = function () {
  inputValid(); // Validates User Input
  var charType = randomCharType(); // Chooses random character type based off of user input
  switch (charType) { // Chooses random character from character type array
    case 0: // Lowercase
      var char = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
      return char;
    case 1: // Uppercase
      var char = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
      return char;
    case 2: // Numeric
      var char = numericArray[Math.floor(Math.random() * numericArray.length)];
      return char;
    case 3: // Special Chars
      var char = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
      return char;
    default:
      charSelector();
      break;
  }
};

// Generate Password Function
var generatePassword = function () {
  sessionStorage.clear(); // Clear Old Password
  criteriaInput(); // Obtain user input
  for (i = 0; i < passwordCrit.length; i++) { // Loop until password length is reached
    var character = charSelector(); // Picks Random Character based off user input
    var oldPassword = sessionStorage.getItem("Password"); // Retrieves saved password
    oldPassword = oldPassword || "";
    var newPassword = oldPassword + character; // Adds new character to saved password
    sessionStorage.setItem("Password", newPassword); // Saves new password
  }
  return newPassword; // Once password length is acheived, outputs password
};

// Starter code here
// ********** ********** ********** ********** **********
// ********** ********** ********** ********** **********
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
