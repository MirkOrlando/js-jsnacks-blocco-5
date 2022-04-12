/* 
SNACK 4
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const arraymixed = [];
array1.forEach((letter, i) => {
  arraymixed.push(letter);
  arraymixed.push(array2[i]);
});

/* array1.forEach((letter) => {
  arrai2.forEach((number) => {
    arraymixed.push(letter);
    arraymixed.push(number);
  });
});
 */
console.log(arraymixed);
