/* 
SNACK 2
Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine 
che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
*/

const zucchine = [
  {
    varieta: "verde",
    peso: 50,
    lunghezza: 14,
  },
  {
    varieta: "viola",
    peso: 80,
    lunghezza: 20,
  },
  {
    varieta: "verde",
    peso: 100,
    lunghezza: 11,
  },
  {
    varieta: "viola",
    peso: 40,
    lunghezza: 30,
  },
  {
    varieta: "arancio",
    peso: 60,
    lunghezza: 9,
  },
  {
    varieta: "arancio",
    peso: 100,
    lunghezza: 24,
  },
  {
    varieta: "blu",
    peso: 150,
    lunghezza: 8,
  },
  {
    varieta: "blu",
    peso: 110,
    lunghezza: 19,
  },
  {
    varieta: "blu",
    peso: 100,
    lunghezza: 34,
  },
  {
    varieta: "verde",
    peso: 50,
    lunghezza: 23,
  },
];

const zucchineCorte = zucchine.filter((zucchina) => zucchina.lunghezza < 15);
const zucchineLunghe = zucchine.filter((zucchina) => zucchina.lunghezza > 15);
let pesoCorte = 0;
let pesoLunghe = 0;
zucchineCorte.forEach((zucchina) => {
  const peso = zucchina.peso;
  pesoCorte += peso;
});
console.log(pesoCorte);
zucchineLunghe.forEach((zucchina) => {
  const peso = zucchina.peso;
  //console.log(peso);
  pesoLunghe += peso;
});
console.log(pesoLunghe);
