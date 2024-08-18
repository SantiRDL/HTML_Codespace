//generatePassword.js

function generatePassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

    let password = '';

    length = Math.max(length, 8);

    password += getRandomCharacter(uppercaseLetters);
    password += getRandomCharacter(lowercaseLetters);
    password += getRandomCharacter(numbers);
    password += getRandomCharacter(symbols);

    for (let i = 4; i < length; i++) {
        const characterSet = uppercaseLetters + lowercaseLetters + numbers + symbols;
        password += getRandomCharacter(characterSet);
    }

    password = shuffleString(password);

    return password;
}

function getRandomCharacter(characterSet) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    return characterSet[randomIndex];
}

function shuffleString(string) {
    const characters = string.split('');
    for (let i = characters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join('');
}