/************************************** 
 * CAMPO MINATO
 * 
 * V 0.0.1
 *
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

var numberMax;
var numberBomb = 16;
var possibility = numberMax - numberBomb;
var listBomb = [];
var numberAccept = [];
var numberUser = 0;

// Scelta difficoltà
var difficulty = parseInt( prompt ('Inserisci la difficolta da 0 a 2').trim() );

// Validazione
while (isNaN(difficulty) || difficulty < 0 || difficulty > 2) {
    difficulty = parseInt( prompt ('Inserisci la difficolta da 0 a 2').trim() );
}
 
switch (difficulty) {
    case 0:
        numberMax = 100;
        break;
    
    case 1:
        numberMax = 80;
        break;
    
    case 2:
        numberMax = 50;
}

possibility = numberMax - numberBomb;

// Creazione bombe
while (listBomb.length < numberBomb) {
    var bomb = numberRandom(numberMax);

    if (! listBomb.includes(bomb)) {
        listBomb.push(bomb);
    }
}


while ( (numberAccept.length < possibility) && (! listBomb.includes(numberUser)) ) {
    // Scelta numero utente
    numberUser = parseInt( prompt('Scegli il tuo numero da 1 a ' + numberMax + '\nTentativi riusciti: ' + numberAccept.length + ' di ' + possibility) );
    // Validazione
    while ( ( isNaN(numberUser) ) || (numberUser < 1) || (numberUser > numberMax) ) {
        numberUser = parseInt( prompt('Numero non valido. inserisci un numero da 1 a ' + numberMax) );
    }

    // Controllo numero
    if (listBomb.includes(numberUser)) {
        alert('Hai Perso! :( Hai provato con successo ' + numberAccept.length + ' volte prima di trovare la bomba');
    }
    else if (numberAccept.includes(numberUser)) {
        alert('Numero già inserito. Riprova')
    } 
    else if (! numberAccept.includes(numberUser)) {
        numberAccept.push(numberUser);
    }

    // Raggiungimento delle possibilità
    if (numberAccept.length === possibility) {
        alert('Hai Vinto :)');
    }
}

// FUNCTION 
// Crea un numero random
function numberRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}