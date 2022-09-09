/*
Thema: Arrow function
Das ist nicht anderes als eine andere, kompaktere
Schreibweise für Funktionen in JavaScript (und auch in anderen Programmiersprachen).

Beispiel 1 - Arrow-Funktion ohne Parameter
 */

//Arrow-Funktion als Mehrzeihler (empfohlen)
let greetUser = () => {
    console.log('Welcome user!')
}

//Aufruf der Arrow-Funktion
greetUser();

//Arrow-Funktion als Einzeihler (in Ausnahmefällen)
let greetUserShort = () => console.log('Welcome user too!');

//Aufruf der Arrow-Funktion mit gleichzeitger Ausgabe auf der Console
greetUserShort();

/*
Beispiel 2 - Arrow-Funktion MIT einem Parameter
 */

//Arrow-Funktion als Mehrzeihler (empfohlen)
let square = (num) => {
    return num * num;
}

//Verkürzte Variante
let squareShort = (num) => num * num;



//Aufruf der Arrow-Funktion
let result1 = square(3);
//Ausgabe des Resultats
console.log(`3 hoch 2 gibt: ${result1}`);


//Aufruf der Arrow-Funktion
let param1 = 10;
let result2 = squareLong(param1);
//Ausgabe des Resultats
console.log(`${param1} hoch 2 gibt: ${result2}`);


/*
Beispiel 3 - Arrow-Funktion MIT mehr als einem Parameter
 */

let add = (a,b) => {
    return a + b;
}

//Aufruf von add
let paramA = 20;
let paramB = 10;
//Ausgabe des Resultats
console.log(`${paramA} + ${paramB} = ${add(paramA,paramB)}`);

