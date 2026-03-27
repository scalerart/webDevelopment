const display = document.getElementById('display');
const buttons = document.querySelectorAll('input[type="button"]');

/* Mouse click */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === "AC") {
            display.value = "";
        }
        else if (value === "DE") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "=") {
            try {
                display.value = calculate(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
});

/* Keyboard */
document.addEventListener('keydown', (e) => {
    const key = e.key;

    if ((key >= '0' && key <= '9') || '+-*/.'.includes(key)) {
        display.value += key;
    }
    else if (key === 'Enter') {
        try {
            display.value = calculate(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    else if (key === 'Escape') {
        display.value = "";
    }
});

/* Calculate */
function calculate(expression) {
    return Function("return " + expression)();
}