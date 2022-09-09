/*
Eine Objekt-Vorlage wird in JavaScript mit class erstellt
(nicht zu verwechseln CSS-Klasse)

Beispiel für Person
 */

/* Klasse */
class Person{
    //Property
    firstName;
    lastName;
    gender;
    birthday;
    profession = "No profession set!";

    /* Konstruktor - erstellt das Objekt (sog. Instanz) */
    constructor(firstName, lastName, gender, birthday) {
        //Properties - Eigenschaften/Attribute einer Klasse
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.birthday = birthday;
    }

    /* Methode (ähnlich wie Funktion) - kann Parameter haben */
    getFullName(){
        return `${this.firstName}, ${this.lastName}.`
    }

    /* Getter - OHNE Parameter */
    get gender(){
        return `${this.gender}`;
    }

    get profession(){
        return `${this.profession}`;
    }

    /* Setter ohne return */
    set profession(prof) {
        this.profession = prof;
    }
}

export default Person;


/*
Beispiel 1: Objekt person1 mit Klasse Person erzeugen
Erzeugung des Objekts mit Schlüsselwort 'new' und dem Klassen-Namen.
 */
/*
let person1 = new Person("Hans", "Muster", "männlich", "1973-11-30");
//Ausgabe
console.log(`Vorname, Nachname: ${person1.getFullName()}`);
//Getter
console.log(`Beruf: ${person1.profession}`);
//Setter
person1.profession = "Mediamatiker";
//Getter
console.log(`Beruf: ${person1.profession}`);
*/
