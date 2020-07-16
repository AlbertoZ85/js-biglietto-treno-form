// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza
// Prezzo calcolato
// Categoria selezionata dall'utente
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// FUNZIONI
// a. ASSEGNAZIONE FASCIA PREZZO
function discount(category) {
    var offer = 'Prezzo intero';
    if (category == minor) {
        offer = 'Silver: -20%';
    } else if (category == adult) {
        offer = 'Gold: -40%';
    }
    return offer;
}

// b. GENERAZIONE NUMERI RANDOM
function randomNum(min,max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
}

// c. CALCOLO PREZZO BIGLIETTO
function ticketPrice(km,eta) {
    var prezzo = 0.21*km;
    if (eta == minor) {
        prezzo -= 0.20*prezzo;
    }   else if (eta == over) {
        prezzo -= 0.40*prezzo;
    }
    return prezzo.toFixed(2);
}
