/* DEFINE EVENT HANDLERS
------------------------------------------------------------------------------- */
// This function clears all the values in the display box
function clearScreen() {
    document.getElementById("display-box").innerText = "";
}

// This function displays values in the display box
function display(event) {
    document.getElementById("display-box").innerText += event.target.innerText;
}

// This function evaluates the expression and displays the answer in the display box
function calculate() {
    const calculation = document.getElementById("display-box").innerText;
    document.getElementById("display-box").innerText = eval(calculation);
}



/* CREATE EVENT LISTENERS
------------------------------------------------------------------------------- */
// Whenever a number or operation button is clicked, it will display in the display box
const basicBtns = document.querySelectorAll('.btn-type-1, .btn-type-2')
for (let btn of basicBtns) {
    btn.addEventListener('click', display)
}

// Whenever the equal sign is clicked, it will calculate the info in the display box
document.getElementById('equals')
    .addEventListener('click', calculate)


// Whenever the clear button is clicked, it will clear the display box
document.getElementById('clear')
    .addEventListener('click', clearScreen)