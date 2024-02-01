// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// ```
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
// ```

let tester1 = 'Pig latin is cool';
let tester2 = 'Hello World!';

function pigIt(str) {
    return str.split(' ').map(word => {
        if (/[a-zA-Z]/.test(word)) {
            return word.slice(1) + word[0] + 'ay';
        } else {
            return word;  // Menjaga tanda baca tidak berubah
        }
    }).join(' ');
}