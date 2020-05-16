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

// Password Criteria Functions
var passCritFunctions = function () {
  var length = function () {
    var length = prompt("Select password length. (Between 8 and 128)");
    if (length >= 8 && length <= 128) {
      return length;
    }
    else {
      alert("Enter a number between 8 and 128");
      this.length();
    }
  };
  var lowercase = function () {
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
      this.lowercase();
    }
  };
  var uppercase = function () {
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
      this.uppercase();
    }
  };
  var numeric = function () {
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
      this.numeric();
    }
  };
  var specialChar = function () {
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
      this.specialChar();
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
passCritArray = [
  {
    lowercaseArray =[
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    ]
  },
  {
    uppercaseArray =[
      "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    ]
  },
  {
    numericArray =[
      "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    ]
  },
  {
    specialCharArray =[
      " ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",
    ]
  },
];

// Generate Password Function
var generatePassword = function () {
  passCritFunctions(); //passwordCrit.length.lowercase.uppercase.numeric.specialChar


  return
};


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
