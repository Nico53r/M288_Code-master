//Identification
let htmlObj = document.getElementById("identification");
htmlObj.innerHTML =
    `id: ${lernender.studentid}<br>`+
    `Name: ${lernender.firstname}<br>`+
    `Vorname: ${lernender.lastname}<br>`+
    `Ausbildung: ${lernender.profession}`;

//Lehrbetrieb
htmlObj = document.getElementById("lehrbetrieb");
htmlObj.innerHTML =
    `Firma: ${lernender.betrieb.firma}<br>`+
    `Kontakt: ${lernender.betrieb.kontakt}<br>`+
    `Email: ${lernender.betrieb.email}`;

//Kurse - Berufskunde
htmlObj = document.getElementById("berufskunde");
lernender.courses.berufskunde.forEach(modulid => {
    htmlObj.innerHTML += `${modulid}<br>`;
});


let fach = "ABU";
if (lernender.BMS){
    fach = "BMS";
}
htmlObj = document.getElementById("allgemeinTitle");
htmlObj.innerText += " " + fach;

//Kurse - Allgemein Bildung
htmlObj = document.getElementById("allgemein");
let faecherListe = lernender.courses.allgemein;
for (let i=0;i<faecherListe.length; i++){
    htmlObj.innerHTML += `${faecherListe[i]}<br>`;
};

/*let portfolio ={
    fach: "MMT",
    titel: "Filmschnitt",
    dauer: 10,
    inhalt: "Arbeitsplatz eines Mediamatikers - Showcase",
    autor: ["Augstburger", "Marty"],
    getAutoren(){
        return `${this.autor[0]}, ${this.autor[1]}`
    }
}

htmlObj = document.getElementById("portfolio");
htmlObj.innerHTML =
    `Fach: ${portfolio.fach.toString()}<br>`+
    `Autoren: ${portfolio.getAutoren()}<br>`;*/

