//Палиндромы
// -------------------------------------------------------------#1
// const word: string | null = prompt('Введите слово');

// function isPalindrome(word: string): boolean {
//     const reverse = Array.from(word).reverse().join('');
//     if (word === reverse) {
//         return true;
//     } else {
//         return false;
//     }
// }

// if (word === 'string') {
//     isPalindrome(word);
// }

// -------------------------------------------------------------#2

// function isPalindrome(word: string | null): boolean {
//     if (word === null) {
//         return false;
//     }

//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[i] !== word[word.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isPalindrome(prompt('Введите слово'))) {
//     console.log('Палиндром');
// } else {
//     console.log('Не палиндром');
// }

// Игра в города
// -------------------------------------------------------------#1

type TypeCityUser = string | null;

const invalidLetters: string[] = ['ь', 'ъ', 'ы', 'ё'];

function getLastCharacter(word: string): string {
    const lastCharacter: string = word.slice(-1);

    if (invalidLetters.includes(lastCharacter)) {
        return word[word.length - 2];
    } else {
        return lastCharacter;
    }
}

function repeatCities(array: string[], city: string): boolean {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === city) {
            return true;
        }

    }
    return false;
}

let inputCity: TypeCityUser = prompt('Введите название города');
let cities: string[] = [];

function isValidCity(answerUser: TypeCityUser) {
    if (answerUser === null) {
        while (answerUser === null) {
            answerUser = prompt('Введите название города');
        }
    } else {
        cities.push(answerUser);
    }
}

isValidCity(inputCity)

while (true) {
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

// -------------------------------------------------------------#