
const invalidLetters: string[] = ['ь', 'ъ', 'ы', 'ё'];

function getLastCharacter(word: string): string {
    const lastCharacter = word.slice(-1);
    if (invalidLetters.includes(lastCharacter)) {
        return word[word.length - 2];
    } else {
        return lastCharacter;
    }
}

function repeatCities(array: string[], city: string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === city) {
            return true;
        }
    }
}

let inputCity = prompt('Введите название города');
let cities = [];

while (!inputCity) {
    inputCity = prompt('Введите название города');
}

cities.push(inputCity);

while(true) {
    let lastCity = cities[cities.length - 1];
    inputCity = prompt(`Введите город на букву ${getLastCharacter(lastCity)}`);

    if (!inputCity) break;

    if (getLastCharacter(lastCity) !== inputCity[0]) {
        alert('Введите правильный город');
        continue;
    }

    if (repeatCities(cities, inputCity)) break;

    cities.push(inputCity);
}

alert('Игра закончилась. Либо вы ввели город повторно, либо не ввели ничего');