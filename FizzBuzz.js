// TODO: Define constants for the form and the result display area
const myText = document.getElementById("userInput");
const mySubmit = document.getElementById("submitBtn");
const myResult = document.getElementById("resultText");
let num;

// TODO: Add the first line of the event listener to handle form submission
mySubmit.onclick = function() {

// TODO: Get the number from the form input
    num = myText.value;
    num = Number(num);

// TODO: Write FizzBuzz logic here
// If divisible by both 3 and 5, set the output to "FizzBuzz"
    if (num % 3 == 0 && num % 5 == 0 && num >= 0) {
        myResult.textContent = "FizzBuzz";
        
// If divisible by 3, set the output to "Fizz"
    } else if (num % 3 == 0 && num % 5 != 0) {
        myResult.textContent = "Fizz";

// If divisible by 5, set the output to "Buzz"
    } else if (num % 3 != 0 && num % 5 == 0) {
        myResult.textContent = "Buzz";

// Otherwise, set the output to the number itself
    } else {
        myResult.textContent = num;

    }
}

// Display the result on the page
result.textContent = output;
