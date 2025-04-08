/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "jAvascript";

// Dichiara la funzione qui.
/**
 * funzione che verifica se un carattere è una vocale
 * @param {string} char carattere da verificare
 * @returns {boolean} true o false
 */
function isVowel(char) {
  char = char.toLowerCase();

  if (char === "a") return true;
  else if (char === "e") return true;
  else if (char === "i") return true;
  else if (char === "o") return true;
  else if (char === "u") return true;
  return false;
}
/**
 * Funzione che conte le vocali presenti in una stringa
 * @param {string} stringValue stringa in input
 * @returns countVowels numero di vocali trovate
 */

function countVowels(stringValue) {
  let countVowels = 0;
  for (i = 0; i < stringValue.length; i++) {
    if (isVowel(stringValue[i])) {
      countVowels += 1;
    }
  }
  return countVowels;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(`Il numero di vocali in "${word}" è di ${countVowels(word)}`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
