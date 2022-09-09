console.log('JS OK')

/* SNACK 1*/

/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


/* SNACK 2*/

/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */



/* SNACK 3*/

/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


// SVOLGIMENTO 

// SNACK 1

const footballTeams = [
    
    {
        nome : "roma",
        gol: 0,
        falli: 0,
    },

    {
        nome: "lazio",
        gol: 0,
        falli: 0,
    },

    {
        nome : "milan",
        gol: 0,
        falli: 0,
    }

]

for (let i = 0; i < footballTeams.length; i++) {

    const match = footballTeams[i];

    const golNumber = parseInt(Math.random() * 10);

    const falliNumber = parseInt(Math.random() * 10);

    match.gol = golNumber;

    match.falli = falliNumber;

}

console.log(footballTeams);


// SNACK 2

// SNACK 3

const zucchine = [
    {
        peso: 10,
        misura: 15
    },

    {
        peso: 20,
        misura: 5
    },

    {
        peso: 60,
        misura: 20
    },

    {
        peso: 90,
        misura: 6
    },

    {
        peso: 10,
        misura: 23
    },

    {
        peso: 35,
        misura: 15
    },

    {
        peso: 4,
        misura: 16
    },

    {
        peso: 12,
        misura: 20
    },

    {
        peso: 55,
        misura: 20
    },

    {
        peso: 45,
        misura: 10
    },
]

// Divido in due array separati 
let corte = [];
let lunghe = [];

let pesoLunghe = 0;
let pesoCorte = 0;

zucchine.forEach((key, index) => {
    if (key.misura >= 15) {
        lunghe.push(key)
        pesoLunghe += key.peso;
    }
    else {
        corte.push(key);
        pesoCorte += key.peso;
    }


})

// stampo separatamente in due gruppi
console.log("peso corte : "+ pesoCorte , "peso lunghe "+ pesoLunghe)