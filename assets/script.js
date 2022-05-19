var generateBtn = document.querySelector("#generate");

// Seperate character arrays with alphabetic, numeric and special characters will be appeneded to blank array.
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var outcomeArray = [];
var userArray = [];

function generatePassword() {

    // Prompt and alert ensure user selects between 8 and 128 characters.
    var passwordLength = prompt ("Please choose bewteen 8 and 128 characters");

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password must be between 8 and 128 characters!");
        return "";
    }

    // User confirms whether they would like to include specific characters.
    var characters = confirm ("Would you like to include special characters?");
    var uppercases = confirm ("Would you like to include uppercase letters?");
    var lowercases = confirm ("Would you like to include lowercase letters?");
    
    var numbers = "numeric";
    
    // If statements merge arrays and returns new array
    if (characters){
        outcomeArray = outcomeArray.concat(specialCharacterArray);
    }
    
    if (numbers){
        outcomeArray = outcomeArray.concat(numericArray);
    }

    if (uppercases){
        outcomeArray = outcomeArray.concat(uppercaseArray);
    }

    if (lowercases){
        outcomeArray = outcomeArray.concat(lowercaseArray);
    }

    // The loop will select random elements from the array and generate a random password each time.
    for (var i = 0; i < passwordLength; i++) {
        userArray.push (outcomeArray[Math.floor(Math.random() * outcomeArray.length)]); 
    }

    return userArray.join("");
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);