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

