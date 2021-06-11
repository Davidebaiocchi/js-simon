// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// creo un alert con i 5 numeri random
var randomNumbers = [];

while (randomNumbers.length < 5) {
    var numeroCasuale = Math.floor(Math.random() * 100 ) +1;

    if (!randomNumbers.includes(numeroCasuale)) {
        randomNumbers.push(numeroCasuale);
    }  
}
alert(randomNumbers);










// --------------> Function