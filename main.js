// Richiesta km e età all'utente
let km = parseInt(prompt("Quanti sarà lungo il suo viaggio in chilometri?"));
let age = parseInt(prompt("Quanti anni ha?"));

// Calcolo prezzo biglietto
let provisionalPrice = km * 0.21;
let finalPrice;
let discount;

if (age < 18) {
    discount = provisionalPrice * 0.2;
    finalPrice = provisionalPrice - discount;
    //console.log(`Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}€`)
} else if (age > 65) {
    discount = provisionalPrice * 0.4;
    finalPrice = provisionalPrice - discount;
    //console.log(`Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}€`)
} else {
    finalPrice = provisionalPrice
    //console.log(`Il prezzo del biglietto è di: ${provisionalPrice.toFixed(2)}€`)
}

console.log(`Il prezzo del biglietto è di: ${finalPrice.toFixed(2)}€`)