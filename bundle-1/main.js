/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}

// CORREZIONE
for (let i = 0; i < 5; i++) {
    console.log(i);
};
console.log("---");
/**
 * 1. crea 5 interazionei, contando da 0 a 4
 * 2.
 * 3. il > era al posto del <
 */

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// CORREZIONE
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
};
console.log(addIfEven(6));
console.log("---");
/**
 * 1. se il numero è pari, divisibile per 2, somma 5 all'numero inserito
 * 2. mancava il richiamo della funzione
 * 3. l'uguale andava scritto === e non =.
 */

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// CORREZIONE
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    };
};
console.log(loopToFive());
console.log("---");
/**
 * 1. 
 * 2. si, i parametri vanno separati con ; 
 * 3. 
 */

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}

// CORREZIONE
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const curNumber = numbers[i];
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(curNumber);
        }
    }
    return evenNumbers;
}
displayEvenNumbers();
// dovrebbe restituire [2,4,6,8]
/**
 * 1. dovrebbe mostrare in console solo i numeri pari dell'array.
 * 2. a riga 88 il ; non va sul'ultimo parametro, 
 * 3. a riga 89 l'uguale va scritto ===, a riga 88 non serve il -1 al lenght, manca una vaiabile che ottenga il numero dell'array, return deve essere esterno al ciclo for senno non funziona, non dobbiamo pushare i ma l'elemnto del ciclo ( curNumber) e a riga 90 il ; non va dopo l'if.
 */