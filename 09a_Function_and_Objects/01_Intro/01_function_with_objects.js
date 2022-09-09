/*
Thema: Objekte mit Function-Expression
Funktionen (praktisch in allen Programmiersprachen) vorhanden,
erlauben Programmcode mehrmals auszuführen gestalten die gesamte
Applikation wartbarer (leserlich, kosteneffizient, erweiterbar).
*/

/*
Beispiel 1 - Funktion mit Objekten als Parameter
 */


//Objekt 1
let book1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//Objekt 2
let book2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//Funktion liefert als Resultat wieder ein Objekt zurück
let getSummary = function (book) {
    return {
        summary: `Das Buch \"${book.title}\" ist vom Autor ${book.author}`,
        pageCount: `Das Buch \"${book.title}\" hat ${book.pageCount} Seiten.`
    }
}

//Aufruf und Ausgabe
let obj1 = getSummary(book1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(book2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

