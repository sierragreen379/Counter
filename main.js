// select number and buttons
let number = document.querySelector('#number')
let decrease = document.querySelector('#decrease-button');
let reset = document.querySelector('#reset-button');
let increase = document.querySelector('#increase-button');

// add event listeners for the buttons
decrease.addEventListener("click", decreaseNumber);
reset.addEventListener("click", resetNumber);
increase.addEventListener("click", increaseNumber);

// functions to decrease, reset, and increase the number
function decreaseNumber() {
    number.innerText--;
    numberColor();
}

function resetNumber() {
    number.innerText = 0;
    numberColor();
}

function increaseNumber() {
    number.innerText++;
    numberColor();
}

// function to change the color of the number based on its value
function numberColor() {
    if (number.innerText > 0) {
        number.style.color = "green";
    } else if (number.innerText < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
}