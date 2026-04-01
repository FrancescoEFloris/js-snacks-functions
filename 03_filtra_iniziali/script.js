// Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array
// contenente solo le parole che iniziano con quella lettera.

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
let userInput = prompt("Inserisci una lettera, ti verranno restituiti solo i nomi che iniziano con quella lettera:");
// Dichiara la funzione qui.

function iniziaCon(names) {
    // controllo che sia stata inserita una sola lettera, se non fosse così avviso e termino funzione
    if (userInput.length > 1) {
        console.log("Inserisci una sola lettera");
        return;
    }
    // creo una variabile che faccia da switch, se si accende non devo stampare il messaggio nel secondo if
    let almenoUno = false;
    // creo un ciclo che controlli lettera per lettera, rendendo sia la lettera del nome sia l'input minuscoli
    for (let i = 0; i < names.length; i++) {
        if (names[i][0].toLowerCase() === userInput.toLowerCase()) {
            console.log(names[i]);
            almenoUno = true;
        }
    }
    // se lo switch non si è acceso vuol dire che non ci sono nomi da stampare   
    if (almenoUno === false) {
        console.log("Nessun nome inizia con quella lettera");
    }
}

// Invoca la funzione qui e stampa il risultato in console

iniziaCon(names);

//Risultato atteso se si passa 'A': ["Anna", "Adele", "Alessandra"]