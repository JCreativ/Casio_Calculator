const display = document.getElementById('display');

function appendNumber(number) {
    display.value += number;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Evaluate only valid expressions
        const result = eval(display.value);
        display.value = !isNaN(result) ? result : 'Error';
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSqrt() {
    const value = parseFloat(display.value);
    if (!isNaN(value) && value >= 0) {
        display.value = Math.sqrt(value).toFixed(6); // Fixed to 6 decimal places
    } else {
        display.value = 'Error';
    }
}

function calculateSin() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sin(toRadians(value)).toFixed(6); // Fixed to 6 decimal places
    } else {
        display.value = 'Error';
    }
}

function calculateCos() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.cos(toRadians(value)).toFixed(6); // Fixed to 6 decimal places
    } else {
        display.value = 'Error';
    }
}

function calculateTan() {
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.tan(toRadians(value)).toFixed(6); // Fixed to 6 decimal places
    } else {
        display.value = 'Error';
    }
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

// Splash screen functionality
window.onload = function() {
    setTimeout(function() {
        document.getElementById('splash').style.display = 'none';
        document.getElementById('calculator').style.display = 'block';
    }, 3000); // Show splash for 3 seconds
};