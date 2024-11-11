//"Hello world!" // will become "World! Hello"
//"I absolute love fruits like banana and mango" // Will become "mango and banana like fruits love absolute I"

let text = "Hello World!";
//Converts string into an Array, then reverses it and then takes the reversed array and makes it back to a string.

let reveresedText = text.split(" ").reverse().join(" ");
console.log(reveresedText)

let myString = "I absolute love fruits like banana and mango"
//Converts string into an Array, then reverses it and then takes the reversed array and makes it back to a string.
let reversedString = myString.split(" ").reverse().join(" ");
console.log(reversedString)
