/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*function trovaMassimo(number1, number2) {
  if (number1 > number2) {
    return number1
  } else {
    return number2
  }
}

const primoNumero = 10
const secondoNumero = 20
const massimo = trovaMassimo(primoNumero, secondoNumero)

//console.log('Il numero maggiore è:', massimo)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*function verificaNumero(numero) {
  if (numero !== 5) {
    console.log('not equal')
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/*function verificaDivisibilita(numero) {
  if (numero % 5 === 0) {
    console.log('divisibile per 5')
  }
}

const numeroDaVerificare = console.log('Inserisci un numero intero:')

verificaDivisibilita(5)

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*function verificaNumeri(numero1, numero2) {
  if (
    numero1 === 8 ||
    numero2 === 8 ||
    numero1 + numero2 === 8 ||
    numero1 - numero2 === 8
  ) {
    console.log('Uno dei numeri è 8 o la loro somma/differenza è 8.')
  } else {
    console.log('Nessuna delle condizioni è soddisfatta.')
  }
}

// Esempio di utilizzo

verificaNumeri()

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*function calcolaTotale(prezzoProdotto, quantita, spedizioniGratis) {
  const scontoBlackFriday = 0.2 // 20% di sconto
  let totaleSenzaSconto = prezzoProdotto * quantita
  let totaleConSconto = totaleSenzaSconto * (1 - scontoBlackFriday)

  if (spedizioniGratis) {
    console.log('Spedizioni gratuite!')
  } else {
    console.log('Spedizioni non gratuite.')
    totaleConSconto += 10 // Costo standard delle spedizioni
  }

  console.log(`Totale: $${totaleConSconto.toFixed(2)}`)
}

// Esempio di utilizzo
const prezzo = 50 // Prezzo del prodotto
const quantitaDesiderata = 3 // Quantità desiderata
const spedizioniGratuite = true // Cambia a false se le spedizioni non sono gratuite

calcolaTotale(prezzo, quantitaDesiderata, spedizioniGratuite)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function dispari(num) {
  let risultato = num % 2
  if (risultato === 0) {
    return false
  } else if (risultato === 1) {
    return true
  } else {
    console.log('Non è un numero intero')
    return ''
  }
}

console.log(dispari(3)) // true (dispari)
console.log(dispari(8)) // false (pari)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*let val = 7
if (val < 5) {
  console.log('Meno di 5')
} else if (val < 10) {
  console.log('Meno di 10')
} else {
  console.log('Uguale a 10 o maggiore')
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'toronto',
}
/*delete me.lastName
console.log(me.city)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*me.skills.pop()
console.log(me)

/* ESERCIZIO 14

  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

// Creazione di un array vuoto
/*const numeriArray = []

// Riempimento dell'array con i numeri da 1 a 10
for (let i = 1; i <= 10; i++) {
  numeriArray.push(i)
}

console.log('Array riempito:', numeriArray)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*const numeriArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Sostituisci l'ultimo elemento con il valore 100
numeriArray[numeriArray.length - 1] = 100

console.log("Array con l'ultimo elemento sostituito:", numeriArray) */
