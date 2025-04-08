/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Thomas";
const date = new Date();
console.log(date);

// Dichiara la funzione qui.
/**
 * Funzione che dato un nome restituisce un saluto
 * @param {string} stringName User name
 * @returns {string} welcomeString - stringa di saluto
 */
function welcomeTraditional(stringName) {
  const welcomeString = timeOfDay(17) + stringName;
  return welcomeString;
}
/**
 * Funzione che ritorna il momento della giornata
 * @param {number} hour
 * @returns welcomeMessagge
 */
function timeOfDay(hour) {
  let welcomeMessagge;
  if (hour <= 13) welcomeMessagge = "Buongiorno ";
  else if (hour > 13 && hour <= 17) welcomeMessagge = "Buon Pomeriggio ";
  else welcomeMessagge = "Buona sera ";
  return welcomeMessagge;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(welcomeTraditional(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
