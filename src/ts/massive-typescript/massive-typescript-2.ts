function isPalindromeSecond(word: string | null): boolean {
    if (word === null) {
        return false;
    }

    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - i - 1]) {
            return false;
        }
    }
    return true;
}

if (isPalindromeSecond(prompt('Введите слово'))) {
    console.log('Палиндром');
} else {
    console.log('Не палиндром');
}