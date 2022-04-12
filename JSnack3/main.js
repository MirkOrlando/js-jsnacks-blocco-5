/* 
SNACK 3
Scrivi una funzione che accetti una stringa come argomento 
e la ritorni girata 
(es. Ciao -> oaiC)
*/

//const word = "Ciao";
//console.log(wordReversed);
//console.log(word.split("").reverse().join(""));

const wordToReverse = reverseString("Ciao");
console.log(wordToReverse);

function reverseString(word) {
  word.split("").reverse().join("");
}
