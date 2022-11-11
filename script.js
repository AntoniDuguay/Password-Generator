  function generatePassword() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbers = "0123456789"
  var specialCharacters = "!@#$%^&*()_+-?"
  var finalpasswordcharacterSelection = ""
  var finalPassword = ""
  var passwordLength = prompt("Choose a password length between 8 and 128")
  if (passwordLength > 128 || passwordLength < 8){
    alert("password length must be between 8 - 128")
    return;
  }
  
  var isUppercase = confirm("do you want uppercase characters")
  var isLowercase = confirm("do you want lowercase characters")
  var haveNumbers = confirm("do you want numbers in your password")
  var havespecialCharacters = confirm("do you want special characters in your password")


  if (isUppercase){
    finalpasswordcharacterSelection += upperCase
  }

  if (isLowercase){
    finalpasswordcharacterSelection += lowerCase
  }

  if (haveNumbers){
    finalpasswordcharacterSelection += numbers
  }

  if (havespecialCharacters){
    finalpasswordcharacterSelection += specialCharacters
  }

  
  for ( var i = 0; i < passwordLength; i++ ) {
    finalPassword += finalpasswordcharacterSelection[(Math.floor(Math.random() * finalpasswordcharacterSelection.length))];
  }
    return finalPassword;
}
  

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
