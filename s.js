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
        const againCalNumber = preCalNumber + number;
        caltulatorInput.value = againCalNumber;
    }

})

function verify() {
    const pin = document.getElementById('diplay-pin').value;
    const typeInput = document.getElementById('type-number').value;
    const pinMacth = document.getElementById('notify-sucuss');
    const pinNotMacth = document.getElementById('notify-fail');
    if (pin == typeInput) {

        pinMacth.style.display = 'block';
        pinNotMacth.style.display = 'none';
    } else {

        pinNotMacth.style.display = 'block';
        pinMacth.style.display = 'none';
    }
}