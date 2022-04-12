/* 
SNACK 4
Scrivi una funzione che fonda due array 
(aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
*/

const array1 = ["a", "b", "c"];
const array2 = [1, 2, 3];
const arrayMixed = mergeArray(array1, array2);
console.log(arrayMixed);

/**
 *
 * @param {array} firstArray
 * @param {array} secondArray
 * @returns
 */
function mergeArray(firstArray, secondArray) {
  const arrayMixed = [];
  if (firstArray.length === firstArray.length) {
    firstArray.forEach((element, i) => {
      arrayMixed.push(element);
      arrayMixed.push(secondArray[i]);
    });
    return arrayMixed;
  }
}

/* function mergeArray2(...array) {
  const arrayMixed = [];
  const newArray = array.join("").replace(/,/g, "").split("");
  console.log(newArray);
  array.forEach((letter, i) => {
    arrayMixed.push(letter);
    //arrayMixed.push(array[i]);
  });
  return arrayMixed;
} */

/* array1.forEach((letter) => {
  arrai2.forEach((number) => {
    arrayMixed.push(letter);
    arrayMixed.push(number);
  });
});
 */
