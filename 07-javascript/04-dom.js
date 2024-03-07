// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const userInput1 = document.getElementById('userInput1');
const copyButton = document.getElementById('copy');
const outputDiv = document.getElementById('output');
const outputDiv2 = document.getElementById('output2');
// add an event listener on the target element
copyButton.addEventListener('click', function() {
    // callback function to handle event
    outputDiv.innerText = userInput1.value;
  });

// Exercise #2:
// when the user enters input text, copy the user input to the output area
const userInput2 = document.getElementById('userInput2');
const output2 = document.getElementById('output2');

userInput2.addEventListener('input', function() {
  // callback function to handle input event
  output2.innerText = userInput2.value;
});
// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
