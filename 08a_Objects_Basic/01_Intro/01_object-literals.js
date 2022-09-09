/*
    Thema: JavaScript Objekt mit Literals
*/

/*
Beispiel Objekt 'person',
mit den Eigenschaften Hans Müller, männlich, geboren am 12.Nov. 1973
 */
let person1 = {
    firstName: "Hans",
    lastName: "Muster",
    gender: "männlich",
    birthday: new Date("1973-11-30"),
    getFullName(){
        return `Ich heisse ${this.firstName} ${this.lastName}.`;
    }
}
//Ausgabe
console.log(person1.gender);
console.log(person1.birthday);
console.log(person1.getFullName());

/*
    Unterschied: Referenz vs. Kopie
*/
//Beispiel: Das Objekt wird referenziert/darauf verwiesen (und nicht kopiert)
let personRef = person1;
personRef.firstName = "Fritz";
console.log(person1.getFullName());
console.log(personRef.getFullName());
//Challenge: Was erwarten Sie als Ausgabe?


//Für eine Kopie Object.create verwenden
/*
let personNew = Object.create(person1);
personNew.firstName = "Fritz";
console.log(personNew.getFullName());
console.log(person1.getFullName());
*/


/*
Beispiel: Wie lautet das Objekt 'person' mit den Eigenschaften
Anna Muster, weiblich, geboren am 1.3.2002?

Im nächsten Schritt: Bestehendes Beispiel mit Geburtstagsausgabe erweitern
*/

let person2 = {
    firstName: "Anna",
    lastName: "Muster",
    gender: "weiblich",
    birthday: new Date("2002-03-01"),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    }
}

//Ausgabe
console.log(person2.gender);
console.log(person2.birthday);
console.log(person2.getFullName());

//Bestandteile der Erweiterung
const FullMonths = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

person2 = {
    /* .. */
    getBirthday(){
        //gibt den Wochentag aus und funktioniert hier nicht!
        //let day = this.birthday.getDay();
        let day = this.birthday.getDate();
        let month = FullMonths[this.birthday.getMonth()];
        let year = this.birthday.getFullYear();
        return `Geburtstag am ${day}. ${month} ${year}`;
        //Altersnative, aber unleserlich
        //return `Geburtstag am ${this.birthday}`;
    }
}

//Ausgabe des vollen Namens auf der Console
console.log(person2.getBirthday());
