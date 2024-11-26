let tablica = [];

function dodajDoTablicy(inputNumber) {
    let inputId = "input" + inputNumber;
    let inputValue = document.getElementById(inputId).value;

    if (inputValue >= 1 && inputValue <= 9) {
        tablica.push(inputValue);
        document.getElementById(inputId).value = '';
        console.log(tablica);
        wyswietlTablice();
    } else {
        alert("Proszę wpisać liczbę od 1 do 9");
    }
}

function wyswietlTablice() {
    const tablicaElement = document.getElementById("tablica");
    tablicaElement.textContent = '';

    for (let i = 0; i < tablica.length; i++) {
        let div = document.createElement('div');
        div.textContent = tablica[i];
        tablicaElement.appendChild(div);
    }
}

function usunPierwszyElement() {
    tablica.shift();
    wyswietlTablice();
}

function usunOstatniElement() {
    tablica.pop();
    wyswietlTablice();
}

function zamienNaOwoce() {
    const owoce = {
        "1": "🍓",
        "2": "🍒",
        "3": "🍋",
        "4": "🍊",
        "5": "🍉",
        "6": "🍍",
        "7": "🥝",
        "8": "🍇",
        "9": "🍎"
    };

    for (let i = 0; i < tablica.length; i++) {
        if (owoce[tablica[i]]) {
            tablica[i] = owoce[tablica[i]];
        }
    }

    wyswietlTablice();
}
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 9; i++) {
        let inputId = "input" + i;
        let inputElement = document.getElementById(inputId);
        
        if (inputElement) {
            inputElement.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    dodajDoTablicy(i);
                }
            });
        }
    }
});
