/*
Thema: Funktionen
Funktionen (praktisch in allen Programmiersprachen) vorhanden,
erlauben Programmcode mehrmals auszuführen gestalten die gesamte
Applikation wartbarer (leserlich, kosteneffizient, erweiterbar).

Beispiel 1 - Funktion ohne Parameter
 */

//'function expression' -> Funktionsname wird weggelassen
let greetUser = function () {
    console.log('Welcome user!')
}

//Aufruf der Funktion
greetUser();
greetUser();


//'function declaration' -> Funktionsname wird hinzugefügt.
function greetUser2() {
    console.log('Welcome user too!')
}

//Aufruf der Funktion
greetUser2();

/*
Beispiel 2 - Funktion MIT einem Parameter
 */
function square (num) {
    let result = num * num;
    return result;
}


//Aufruf der Funktion
let result1 = square(3);
//Ausgabe des Resultats
console.log(`3 hoch 2 gibt: ${result1}`);


//Aufruf der Funktion
let param1 = 10;
//Ausgabe des Resultats
console.log(`${param1} hoch 2 gibt: ${square(param1)}`);


/*
Beispiel 3 - Funktion MIT mehr als einem Parameter
 */

/*let add = function (a,b){
    return a + b;
}*/

//besser : Parameter werden überprüft
let add = function (a,b) {
    if ((a === undefined) || (b === undefined)) {
        return 'Please provide two arguments!';
    } else {
        return a + b;
    }
}


//Challenge
console.log(`Add: ${add()}`);
console.log(`Add: ${add(2)}`);
console.log(`Add: ${add(2,4)}`);


//Aufruf von add
let paramA = 20;
let paramB = 10;
console.log(`${paramA} + ${paramB} = ${add(paramA,paramB)}`);

