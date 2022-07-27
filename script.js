// DOM Elements
const resultEl = document.getElementById("password");
const generateEl = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    hasLower, 
    hasNumber, 
    hasSymbol, 
    hasUpper, 
    length);
});

// Generate Password Function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
  console.log("typesCount ", typesCount);
  const typesArray = [{lower}, {upper}, {number}, {symbol}, {length}].filter
  (
    item => Object.values(item) [0]
  );
  console.log("typesArray ", typesArray);
  //check if all bozes are selected
  if(typesCount === 0) {
    return '';
  }

  for(let i = 0; i <length; i += typesCount) {
    typesArray.forEach(type => {
      const functionName = Object.keys(type) [0];
      generatePassword += randomFunction[functionName]();
    })
  }
}

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