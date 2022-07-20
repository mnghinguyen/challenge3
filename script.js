// Assignment Code (get item in html by id)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Declare variables to generate random passwords
  // password length
  var passwordLength = [8, 12, 16];
  // password characters
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
  // password
  var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * characters.length);
  password += characters.substring(randomNumber, randomNumber +1);
 }

 // Associate password with input box
document.getElementById("password").value = password;

}
// Ask user for their choice
//var passwordLength = function() {
//  var userChoice = window.prompt("Enter your password length (or number of characters) 8, 12 or 16");
//  if (!userChoice) {
//    return;
// }
//}