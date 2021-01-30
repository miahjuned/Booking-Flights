
document.getElementById('increase-button').addEventListener("click", function () { // First Class plus butoon
    firstClassHandler(true);
})
document.getElementById('decrease-button').addEventListener("click", function () { //First Class  Minus button
    firstClassHandler(false);
})
function firstClassHandler(firstClassInput) {
    let Input = document.getElementById('first-class');
    let InputNumber = parseInt(Input.value);

    if (firstClassInput == true && InputNumber >= -1) {
        InputNumberTotal = InputNumber + 1;
    };
    if (firstClassInput == false && InputNumber > 0) {
        InputNumberTotal = InputNumber - 1;
    };
    Input.value = InputNumberTotal;
    calculation();
}



document.getElementById('economyPlus').addEventListener("click", function () { // Economy class plus button
    handleEconomyClass(true);
});
document.getElementById('economyMinus').addEventListener("click", function () { // Economy class Minus button
    handleEconomyClass(false);
});
function handleEconomyClass(increase) {
    // Economy input box
    let input = document.getElementById('economyInput');
    let inputBox = parseInt(input.value);
    if (increase == true && inputBox >= -0) {
        inputIncrease = inputBox + 1;
    }
    if (increase == false && inputBox > 0) {
        inputIncrease = inputBox - 1;
    }
    input.value = inputIncrease;
    calculation(); // Calculetion funtions
}


//**   Calculation Function */
function calculation() {
    let firstClass = document.getElementById('first-class'); // First Class input text
    let firstClassInput = parseInt(firstClass.value);

    let economyClass = document.getElementById('economyInput'); // Economy input text
    let economyClassInput = parseInt(economyClass.value);
    // subtotal calculation
    let subtotal = firstClassInput * 150 + economyClassInput * 100;
    document.getElementById('Subtotal').innerText = '$' + subtotal;
    // 10% vat calculetion
    let vat = subtotal * 10 / 100;
    document.getElementById('vat').innerText = '$' + vat;
    // Grand Total calculetion
    let total = subtotal + vat;
    document.getElementById('total').innerText = '$' + total;
}

// Thanks a lot