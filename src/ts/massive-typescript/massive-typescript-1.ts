const word: string | null = prompt('Введите слово');

function isPalindromeFirst(word: string): boolean {
    const reverse = Array.from(word).reverse().join('');
    return word === reverse;
}

if (typeof word === 'string') {
    isPalindromeFirst(word);
}