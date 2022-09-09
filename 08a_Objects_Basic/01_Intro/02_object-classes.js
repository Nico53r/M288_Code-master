/*
    Thema: JavaScript Objekt mit Klassen
*/

/* Modul - externer Programm-Code  nach ES6-Standard
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
* Wichtig Aufruf mit der Option -r esm
* Beispiel: node -r esm 02_object_classes.js
* */
import Person from './person';
/*
Beispiel 1: Objekt person1 mit Klasse Person erzeugen
Erzeugung des Objekts mit Schlüsselwort 'new' und dem Klassen-Namen.
 */
let person1 = new Person("Hans", "Muster", "männlich", "1973-11-30");
//Ausgabe
console.log(`Vorname, Nachname: ${person1.getFullName()}`);
console.log(`Beruf: ${person1.profession}`);
person1.profession = "Mediamatiker";
console.log(`Beruf: ${person1.profession}`);

//Methoden verwenden
let person2 = new Person("Anna", "Muster", "weiblich", "2002-03-01");
//Ausgabe
console.log(person2.getFullName());
console.log(person2.gender);
console.log(person2);

/*
Beispiel 2: Objekt-Liste als Array von Objekten mit Klasse Person erzeugen
und nach Kriterien filtern
 */
//leeres Array
let personArray  = [];
//Gleichzeitig personen-Objekte erzeugen und ins Array hinzufügen.
personArray.push(new Person("Hans", "Muster", "männlich", "1973-11-30"));
personArray.push(new Person("Anna", "Muster", "weiblich", "2002-03-01"));
personArray.push(new Person("Greta", "Thunberg", "weiblich", "2003-03-01"));

//Ausgabe der ganzen Liste
//console.log(personArray);
//Filtern der Objekt-Liste nach weiblichen Personen
//console.log(personArray.filter((person) => person.gender === 'weiblich'));
//Filtern der Objekt-Liste nach Nachnamen
console.log(personArray.filter((person) => person.lastName === 'Muster'));
