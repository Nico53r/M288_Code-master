/*
Thema: Arrays und deren built-in Methoden
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */

/*
 Beispiele 1 - Arrays mit verschiedenen Datentypen

 Weitere Beispiele finden Sie hier:
 https://www.w3schools.com/jsref/jsref_obj_array.asp
 */

//Array mit Strings
let stringArray = [ 'John', 'Bob', 'Mary'];
//alle Elemente
console.log(stringArray);
//erstes Element
console.log(stringArray[0]);
//Array-Länge
console.log(`array length is ${stringArray.length}`);
//letztes Element
let lastElement = stringArray.length-1;
console.log(`last element is ${stringArray[lastElement]}`);

//Zahlen-Array
let numberArray = [ 0,1,2,3,4 ];
console.log(numberArray);
//Challenge: geben Sie das erste und das letzte Array-Element aus

//Boolean-Array
let boolArray = [ true,false ];


//Matrix resp. mehrdimensionales Array
let tictactoe = [
    ['o','x','x'],
    ['o','o','x'],
    ['x','o','x'],
];
console.log(tictactoe);
console.log(tictactoe[0][0]);
console.log(tictactoe[1][2]);
/* Challenge:
Was wird bei tictactoe[2][1] und was bei tictactoe[1][1]
ausgegeben?
*/

//Alternative jedoch seltene Schreibweise
let arr = new Array('red','orange','green');
console.log(arr);



/*
 Beispiele 2 - Wichtigsten Array-Methoden.
 Methoden (ähnlich wie Funktionen) verarbeiten die Array-Daten
 */

//leeren Array initialisieren
let todoList = [];

//Liste füllen
todoList[0] = "Waschen";
todoList[1] = "Einkaufen";
todoList[2] = "Rechnung 1 zahlen";
todoList[3] = "Rechnung 2 zahlen";
todoList.push('Herbst-Ferien: Hotel buchen');
todoList.push('Herbst-Ferien: Flug buchen');
todoList.push('M288-LB02 planen');
todoList.push('M288-LB02 Projekt 1 programmieren');
//Ausgabe
console.log(todoList);

//Todos erledigen resp. die Liste abbauen

//letztes Element löschen
todoList.pop();
console.log('letztes Element gelöscht mit pop:');
console.log(todoList);

//erstes Element löschen
todoList.shift();
console.log(todoList);

//Element an erster Stelle einfügen
todoList.unshift('Mahnung 1 zahlen');
console.log(todoList);

//Index eines Eintrags ermitteln
const todoXY = 'Rechnung 2 zahlen';
console.log(`Index von "${todoXY}" ist ${todoList.indexOf(todoXY)}`);




















