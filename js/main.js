/************************************** 
 * CAMPO MINATO
 * 
 * V 0.0.1
*************************************/

/*************************************
 *  - Il computer deve generare 16 numeri casuali da 1 a 100 (bombe).
 *  - In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati la partita termina altrimenti continua chiedendo all’utente un altro numero.
 *  - La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
 *  - Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
 * 
 *  BONUS: (da fare solo se funziona tutto il resto)
 *  all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
 *  con difficoltà 0 => tra 1 e 100
 *  con difficoltà 1 => tra 1 e 80
 *  con difficoltà 2 => tra 1 e 50 
*************************************/

var numberBomb = 16;
var numberMax = 100;
var possibility = numberMax - numberBomb;
var listBomb = [];
var numberAccept = [];
var numberUser = 0;

while (listBomb.length < numberBomb) {
    var bomb = numberRandom(numberMax);

    if (! listBomb.includes(bomb)) {
        listBomb.push(bomb);
    }
}
console.log(listBomb);

while ()

// FUNCTION 
// Crea un numero random
function numberRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}