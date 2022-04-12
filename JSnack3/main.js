/* 
SNACK 3
Scrivi una funzione che accetti una stringa come argomento 
e la ritorni girata 
(es. Ciao -> oaiC)
*/

//const word = "Ciao";
//console.log(wordReversed);
//console.log(word.split("").reverse().join(""));
const word = "Ciao";
const wordReversed = reverseString(word);
console.log(wordReversed);

/**
 * Reverses a string given to param
 * @param {string} string a string to reverse
 */
function reverseString(string) {
  return string.split("").reverse().join("");
}
