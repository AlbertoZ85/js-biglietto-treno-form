// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// 1. Descrizione dell'evento che si verifica cliccando sul button "Genera"
document.getElementById('genera').addEventListener('click',function() {
    // Creazione del biglietto: al click aggiunta della classe 'show' e rimozione della classe 'hidden'
    var biglietto = document.getElementById('ticket-print');
    biglietto.classList.add('show');
    biglietto.classList.remove('hidden');

    // Salvo in delle variabili i valori acquisiti da input
    var utente = document.getElementById('full-name-input').value;
    var km = document.getElementById('km-input').value;
    var eta = document.getElementById('age-input').value;

    // Invoco le varie funzioni per salvare in delle variabili i valori che andrò a stampare a video
    var prezzo = ticketPrice(km,eta);
    var offerta = discount(eta);
    var carrozza = randomNum(1,10);
    var codice = randomNum(90000,99999);

    // Stampa a video dei dati di output
    document.getElementById('full-name-output').innerHTML = utente;
    document.getElementById('offer').innerHTML = offerta;
    document.getElementById('carriage').innerHTML = carrozza;
    document.getElementById('code').innerHTML = codice;
    document.getElementById('price').innerHTML = prezzo;
});

// 2. Descrizione dell'evento che si verifica cliccando sul button "Annulla"
document.getElementById('annulla').addEventListener('click',function() {
    // Rimozione del biglietto, ripristinando la classe 'hidden'
    var biglietto = document.getElementById('ticket-print');
    biglietto.classList.add('hidden');
    biglietto.classList.remove('show');

    // Reset campi di input
    document.getElementById('full-name-input').value = '';
    document.getElementById('km-input').value = 0;
    document.getElementById('age-input').value = 'Minorenne';
});

// FUNZIONI
// a. ASSEGNAZIONE FASCIA PREZZO
function discount(category) {
    var offer = 'Prezzo intero';
    if (category == 'minor') {
        offer = 'Silver: -20%';
    } else if (category == 'adult') {
        offer = 'Gold: -40%';
    }
    return offer;
}
console.log(discount());

// b. GENERAZIONE NUMERI RANDOM
function randomNum(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// c. CALCOLO PREZZO BIGLIETTO
function ticketPrice(km,eta) {
    var costo = 0.21*km;
    if (eta == minor) {
        costo -= 0.20*costo;
    }   else if (eta == over) {
        costo -= 0.40*costo;
    }
    return costo.toFixed(2);
}
