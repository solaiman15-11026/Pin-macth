function getPin() {
    const pinn = Math.round(Math.random() * 10000);
    const pinDigit = pinn + '';
    if (pinDigit.length == 4) {
        return pinn;
    } else {
        return getPin();
    }

}
function pin() {
    const pin = getPin();
    document.getElementById('diplay-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const caltulatorInput = document.getElementById('type-number');
    if (isNaN(number)) {
        if (number == 'C') {
            caltulatorInput.value = '';
        }
    } else {

        const preCalNumber = caltulatorInput.value;
        const total = preCalNumber + number;
        caltulatorInput.value = total;
    }

})