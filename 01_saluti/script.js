/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

//Funzione tradizionale
// /**
//  * Funzione che dato un nome restituisce un saluto
//  * @param {string} stringName User name
//  * @returns {string} welcomeString - stringa di saluto
//  */
// function welcomeTraditional(stringName) {
//   const welcomeString = "Ciao " + stringName;
//   return welcomeString;
// }

// //Arrow Function
// const welcomeArrow = (stringName) => {
//   return (welcomeString = "Ciao " + stringName);
// };

// //Arrow Function Short
// const welcomeArrowShort = (stringName) =>
//   (welcomeString = "Ciao " + stringName);

// // Invoca la funzione qui e stampa il risultato in console
// console.log(welcomeTraditional(userName));
// console.log(welcomeArrow(userName));
// console.log(welcomeArrowShort(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
