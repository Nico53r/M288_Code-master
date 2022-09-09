/*
Thema: Methoden zu Zahlen-Objekten
*/

let num = 103.941;
/* Anzahl Stellen nach dem Komma begrenzen.
In diesem Beispiel auf 2 Stellen
*/
console.log(num.toFixed(2));

/*
Runden aufgrund der Dezimalstelle
Ist Dezimalstelle >=.5 -> Aufrunden
Ist Dezimalstelle <=.4 -> Abrunden
 */
console.log(Math.round(num));

/*
Abrunden aufgrund der Dezimalstelle
Ist Dezimalstelle <=.9 -> Abrunden
 */
console.log(Math.floor(num));

/*
Aufrunden aufgrund der Dezimalstelle
Ist Dezimalstelle >=.1 -> Aufrunden
 */
console.log(Math.ceil(num));

//Würfel mit Zahlen 1 bis 6 (Dime)
let min = 1;
let max = 6;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);



//Ratespiel mit Würfel

//Argumente auslesen (parsen)
let args = process.argv.slice(2);
let myGuess = args[0];

// 1 bis 6 raten
let makeGuess = function (guess) {
    let min = 1;
    let max = 6;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return { "guess":  guess === randomNum, "number": randomNum }
}
//Aufruf
let result = makeGuess(myGuess);
let feedback = `You guessed wrong! You: ${myGuess} and Computer: ${result.number}`
if (result.guess){
    feedback = `You guessed right! You: ${myGuess} and Computer: ${result.number}`
}
console.log(feedback);
