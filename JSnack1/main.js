/* 
JSnack1
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varieta, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
    varieta: "verde",
    peso: 0.5,
    lunghezza: 80,
  },
  {
    varieta: "viola",
    peso: 0.8,
    lunghezza: 100,
  },
  {
    varieta: "verde",
    peso: 1,
    lunghezza: 110,
  },
  {
    varieta: "viola",
    peso: 0.4,
    lunghezza: 60,
  },
  {
    varieta: "arancio",
    peso: 0.6,
    lunghezza: 90,
  },
  {
    varieta: "arancio",
    peso: 1,
    lunghezza: 95,
  },
  {
    varieta: "blu",
    peso: 1.5,
    lunghezza: 120,
  },
  {
    varieta: "blu",
    peso: 1.1,
    lunghezza: 105,
  },
  {
    varieta: "blu",
    peso: 1,
    lunghezza: 95,
  },
  {
    varieta: "verde",
    peso: 0.5,
    lunghezza: 40,
  },
];

let pesoTotale = 0;
zucchine.forEach((zucchina) => {
  pesoTotale += zucchina.peso;
});
console.log(pesoTotale);

const listaPeso = zucchine.map((zucchina) => zucchina.peso);
console.log(listaPeso);

function sum(...number) {
  let pesoTotale = 0;
  zucchine.forEach((zucchina) => {
    pesoTotale += zucchina.peso;
  });
}
