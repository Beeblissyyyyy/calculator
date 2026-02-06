const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.dataset.value);
    });
});

function handleInput(value) {
    if (value === "C") {
        currentInput = "";
    } else if (value === "←") {
        currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
        try {
            currentInput = eval(
                currentInput.replace("×", "*").replace("÷", "/")
            ).toString();
        } catch {
            currentInput = "Error";
        }
    } else {
        currentInput += value;
    }

    display.value = currentInput;
}

/* BONUS: Keyboard Support */
document.addEventListener("keydown", (e) => {
    const keyMap = {
        "*": "×",
        "/": "÷",
        "Enter": "=",
        "Backspace": "←",
        "Escape": "C"
    };

    if (/[0-9.+\-*/]/.test(e.key)) {
        handleInput(keyMap[e.key] || e.key);
    } else if (keyMap[e.key]) {
        handleInput(keyMap[e.key]);
    }
});