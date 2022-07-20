// Assignment Code (get item in html by id)
var generateBtn = document.querySelector("#generate");

// Declare variables to generate random passwords

// password length
var passwordLength = [8, 12, 16];
var characters = 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Ask user for their choice
var passwordLength = function() {
  var userChoice = window.prompt("Enter your password length (or number of characters) 8, 12 or 16");
  if (!userChoice) {
    return;
  }
}