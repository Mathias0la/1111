/*
const myString = "Hello world";

//Returnerer lengden på Stringen
console.log("length of string is",myString.length);

//Will return character at specified index
console.log(myString.charAt(myString.length -1));
console.log(myString[myString.length - 1]);


//will return the charcode at index - UTF-16
console.group(myString.charCodeAt(myString.length -1));

//Will return sliced part of string
console.log(myString.slice(0,5)); //Will return Hello
console.log(myString.slice(6)); //Will return world



//

console.log(myString.toUpperCase());
console.log(myString.toLowerCase());

//Concatenates string
const text = "Hello" + " " + "World";

const text2 = "Hello".concat(" ", "World!");

console.log(text,text2)


//Removes spaces before and after text
const whitespaceText = "           Hello world!            "

console.log(whitespaceText.trim());

//Adds characters at beginning or end if string is not minimum specified length
let clock = "00:0"
console.log(clock.padStart(5, "x"));
console.log(clock.padEnd(5, "0"));
*/
let myString3 = "Hello my beautiful world!";
/*
console.log(myString3.split("")); //Returns every letter to an array
console.log(myString3.split(" "));// Returns every word to an array
console.log(myString3.split("o"));//Returns   [ 'Hell', ' my beautiful w', 'rld!' ]
*/
let myArray = myString3.split(" ");

console.log(myArray)