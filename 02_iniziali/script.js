/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const initials = [];

// Dichiara la funzione qui.

//Funzione tradizionale
/**
 * Funzione che mi restituisce la prima lettera di una stringa
 * @param {string} name
 */
function firstCharTradition(name) {
  return name[0];
}

//Arrow Funtion
const firstCharArrow = (name) => {
  return name[0];
};

//Arrow function Short
const firstCharArrowShort = (name) => name[0];

// Invoca la funzione qui e stampa il risultato in console
for (i = 0; i < names.length; i++) {
  const currentValue = firstCharTradition(names[i]);
  initials.push(currentValue);
}

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
console.log(initials);
