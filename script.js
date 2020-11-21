// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// All arrays for password selection
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let specChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '<', '>'];

// Empty arrays

let allChars = [];
let blank = [];
let charLimit = 0;
// Password Character length function

function passCharLength () {
   charLimit =parseInt(prompt('Please select the number of characters you would like for your password. Please choose between 8-128.'));
  if (charLimit <8 || charLimit > 128) {
    alert('Please try again with 8 through 128 characters for your password');
    passCharLength();
  }
}

// Generate Password Function with if statements.

function generatePassword () {
  
  allChars =[];

  let s1 = confirm('Do you want to use lower case letters?');
  if (s1 == true) {
    allChars = [...allChars, ...lowerCase];
  }

  let s2 = confirm('Do you want to use upper case letters?');
  if (s2 == true) {
    allChars = [...allChars, ...upperCase];
  }

  let s3 = confirm('Do you want to use numbers?');
  if (s3 == true) {
    allChars = [...allChars, ...num];
  }

  let s4 = confirm('Do you want to use special characters?');
  if (s4 == true) {
    allChars = [...allChars, ...specChar];
  }
  console.log(allChars);
  passCharLength();
  console.log(charLimit);

  // Generate random from blank array
  let final = '';
  for (let i = 0; i < charLimit; i++) {
    console.log(final);
    blank = Math.floor(Math.random () * allChars.length -1);
    final += allChars[blank];
  }

  return final;

  
}  