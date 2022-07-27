// DOM Elements
const resultsEl = document.getElementById("password");
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("length");

console.log(typeof lengthEl);

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};



// Generator functions
// String.fromCharCode to get lowercase characters from browser from character 97
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// String.fromCharCode to get uppercase characters from browser from character 65
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// String.fromCharCode to get number from browser from character 48
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// String.fromCharCode to get symbols from a defined string
function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]+<>?/,.';
  return symbols [Math.floor(Math.random() * symbols.length)];
}
console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());