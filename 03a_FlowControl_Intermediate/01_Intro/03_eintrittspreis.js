/*
Thema: if-then-else mit logischen (boolschen) Operatoren
 */

/*
Beispiel 2 - Eintrittspreis ermitteln
*/

//Argumente auslesen (parsen)
let args = process.argv.slice(2);
console.log("Argumente: ", args);
let price = args[0];
let age = args[1];
let isStudent = args[2];

//Preis des Kunden als Meldung
let message;

if ((age === undefined) || (price === undefined)){
    message = `You need to define the price and the age! Try again.`;
} else {
    let discount;
    // If 6 under print message free entrance
    if (age < 6) {
        message = `With ${age}: Free entrance!`;
    }
    // If between 6 and 16 then 50% off
    else if ((6 <= age) && (age < 16)) {
        discount = 1/2;
        message =
            `With ${age}: You will get a ${(discount * 100).toFixed(2)}% discount!`+
            `Pay CHF ${(price*discount).toFixed(2)}`;
    }
    // If 65 or older or stundent then 33% off
    else if (age >= 65 || isStudent) {
        discount = 1/3;
        message =
            `With ${age}: You will get a ${(discount * 100).toFixed(2)}% discount!`+
            `Pay CHF ${(price*discount).toFixed(2)}`;
    } else {
        discount = 1;
        message= `With ${age}: NO discount! Pay CHF ${(price*discount).toFixed(2)}`;
    }
}
//Output what the customer has to pay
console.log(message);




