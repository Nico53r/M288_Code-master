/*
Topic: How to parse command line arguments
 */
/*
Beispiel 1 - Alle Argumente ausgeben
 */
console.log(process.argv);

/*
Beispiel 2 - nur relevante Argumente ausgeben. D.h. die ersten beiden
Argumente werden aussen vor gelassen.
 */
let myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

/*
Beispiel 3 - relevantes Argument ausesen
 */

let myArgs = process.argv.slice(2);
console.log('Argument 1: ', myArgs[0]);
console.log('Argument 2: ', myArgs[1]);
console.log('Argument 3: ', myArgs[2]);

