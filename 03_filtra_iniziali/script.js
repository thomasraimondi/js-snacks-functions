/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Funzione che mi restituisce sempre la prima lettere
 * @param {string} name stringa in input
 * @returns {string} name[0]
 */
function firstCharTradition(name) {
  return name[0];
}
/**
 * Funzione che dato un array e un carattere serca le parole che iniziano per quel parattere
 * @param {array} stringNames elenco di stringhe
 * @param {string} findChar carattere da confrontare
 * @returns {array} stringFound parole che iniziano con il carattere indicato.
 */
function search(stringNames, findChar) {
  const stringFound = [];
  for (i = 0; i < stringNames.length; i++) {
    const currentValue = stringNames[i];

    if (firstCharTradition(stringNames[i]) === findChar) {
      stringFound.push(currentValue);
    }
  }
  return stringFound;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(search(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
