/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let namesFirst = [];

// Dichiara la funzione qui.

function inizialiNomi (namesFirst) {
    for (let i = 0; i < names.length; i++) {
        namesFirst[i] = names[i][0];
    }
    return namesFirst;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(inizialiNomi(namesFirst));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]