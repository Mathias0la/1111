/*
Methods Oppgaver

 

1. Simple text analyzer

Lag en variabel inputText med hvilken som helst tekst

Analyser teksten

Print lengden på inputText
Print antall ord i inputText
Print første og siste bokstav i inputText
sjekk om inputText inneholder order "JavaScript" og print en relevant melding
konverter inputText til uppercase og print
konverter til lowercase og print
fjern alle spaces på inputText så print resultatet
 

2. Array manipulering

Lag en array fruits med 3 frukter av ditt valg.

Legg til en frukt på starten og på slutten av fruits.
Fjern den andre tingen i listen så print den oppdaterte arrayen
Flytt den tingen som ligger sist i arrayen til starten av arrayen så print*/



let inputText = "This is the input text"
//Printer lengden på inputText
console.log(inputText.length);
//Gjør om inputText til en Array for å dele inn hvert ord for seg selv for så å sjekke lengden.
console.log(inputText.split(" ").length)
//Sjekker først hvilken bokstav som er på Index 0 så sjekker jeg hva som er siste bokstav i stringen
console.log(inputText.charAt(0), inputText.charAt(inputText.length -1));
//Sjekker om inputText inneholder ordet "JavaScript"
if(inputText.includes("JavaScript")){
    console.log("Stringen inputText inneholder ordet JavaScript")
} else {
    console.log("Stringen inputText inneholder ikke ordet JavaScript")
}

//Konverterer stiring til upperCase og lowerCase og printer
console.log(inputText.toUpperCase())
console.log(inputText.toLowerCase())

//Fjerner spaces så printer jeg resultatet (Ved å gjøre det om til en Array så transformere det tilbake til en string uten spaces)
console.log(inputText.split(" ").join(""))

//Array
let myArray = ["Apple","Banana","Pear"]
//Legger til en item til starten av arrayen
myArray.unshift("Kiwi");
//Legger til en item til slutten av arrayen
myArray.push("Strawberry");

console.log(myArray)
//Fjerner den andre itemen fra arrayen som blir Apple
myArray.splice(1,1)

console.log(myArray)

//Fjerner siste item fra Array som her blir Strawberry
myArray.pop();
console.log(myArray)
// Legger til igjen Strawberry til arrayen men denne gangen i starten av arrayet
myArray.unshift("Strawberry");
console.log(myArray)
