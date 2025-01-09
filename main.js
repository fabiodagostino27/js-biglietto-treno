// Richiesta km e età all'utente
let km = parseInt(prompt("Quanti sarà lungo il suo viaggio in chilometri?"));
let age = parseInt(prompt("Quanti anni ha?"));

// Calcolo prezzo biglietto
let provisionalPrice = km * 0.21;

if(age < 18) {
    let discount = provisionalPrice * 0.2;
    let finalPrice = provisionalPrice - discount;
    console.log(`Il prezzo del biglietto è di: ${finalPrice}€`)
} else if(age > 65) {
    let discount = provisionalPrice * 0.4;
    let finalPrice = provisionalPrice - discount;
    console.log(`Il prezzo del biglietto è di: ${finalPrice}€`)
} else {
    console.log(`Il prezzo del biglietto è di: ${provisionalPrice}€`)
}