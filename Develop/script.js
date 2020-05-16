//AS AN employee with access to sensitive data
//I WANT to randomly generate a password that meets certain criteria
//SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// ********** WHEN I click the button to generate a password
// ********** THEN I am presented with a series of prompts for password criteria
// ********** WHEN prompted for password criteria
// ********** THEN I select which criteria to include in the password
// ********** WHEN prompted for the length of the password
// ********** THEN I choose a length of at least 8 characters and no more than 128 characters
// ********** WHEN prompted for character types to include in the password
// ********** THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// ********** WHEN the password is generated
// ********** THEN the password is either displayed in an alert or written to the page

// Assignment code here


// Password Character Arrays
passCritArray = [
  0, 1, 2, 3,
];
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
// Password Criteria Functions
var passCritFunctions = function () {
  // Length
  var length = function () {
    var passLength = prompt("Select password length. (Between 8 and 128)");
    if (passLength >= 8 && passLength <= 128) {
      return passLength;
    }
    else {
      alert("Enter a number between 8 and 128");
      length();
    }
  };
  // Lowercase
  var lowercase = function () {
    var passLowercase = prompt("Include lowercase? (y/n)");
    passLowercase = passLowercase.toLowerCase();
    if (passLowercase === "y") {
      return true;
    }
    else if (passLowercase === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      lowercase();
    }
  };
  // Uppercase
  var uppercase = function () {
    var passUppercase = prompt("Include uppercase? (y/n)");
    passUppercase = passUppercase.toLowerCase();
    if (passUppercase === "y") {
      return true;
    }
    else if (passUppercase === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      uppercase();
    }
  };
  // Numeric
  var numeric = function () {
    var passNumeric = prompt("Include numeric values? (y/n)");
    passNumeric = passNumeric.toLowerCase();
    if (passNumeric === "y") {
      return true;
    }
    else if (passNumeric === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      numeric();
    }
  };
  // Special Characters
  var specialChar = function () {
    var passSpecialChar = prompt("Include special characters? (y/n)");
    passSpecialChar = passSpecialChar.toLowerCase();
    if (passSpecialChar === "y") {
      return true;
    }
    else if (passSpecialChar === "n") {
      return false;
    }
    else {
      alert("Enter 'y' or 'n'");
      specialChar();
    }
  };
  passwordCrit = {
    length: length(),
    lowercase: lowercase(),
    uppercase: uppercase(),
    numeric: numeric(),
    specialChar: specialChar(),
  }
  return passwordCrit;
};

// Character Selector
var charSelect = function () {
  var charSelector = function () {
    var randomArray = function () {
      var arraySelect = passCritArray[Math.floor(Math.random() * passCritArray.length)];
      return arraySelect;
    };
    var array = randomArray();
    switch (array) {
      case 0:
        var char = lowercaseArray[Math.floor(Math.random() * lowercaseArray.length)];
        return char;
      case 1:
        var char = uppercaseArray[Math.floor(Math.random() * uppercaseArray.length)];
        return char;
      case 2:
        var char = numericArray[Math.floor(Math.random() * numericArray.length)];
        return char;
      case 3:
        var char = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
        return char;
      default:
        break;
    }
  };
  var character = charSelector();
  return character;
};

// Generate Password Function
var generatePassword = function () {
  sessionStorage.clear(); // Clear Old Password
  passCritFunctions(); // passwordCrit.length.lowercase.uppercase.numeric.specialChar
  for (i = 0; i < passwordCrit.length; i++) {
    var character = charSelect(); // Random Character
    var oldPassword = sessionStorage.getItem("Password");
    oldPassword = oldPassword || "";
    var newPassword = oldPassword + character;
    sessionStorage.setItem("Password", newPassword);

  }
  return newPassword;
};
//
//
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
