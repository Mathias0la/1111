


const myNumber = 7858658;
//Convert number to string
console.log(myNumber.toString());
//Convert number to exponentiol (x * 10 ^y)
console.log(myNumber.toExponential(5))

//How many decimals we want the number to have
const myNumber2 = 9.1281112;

console.log(myNumber2.toFixed(3));
console.log(myNumber.toFixed(2));
//How many digits we wnat the number to display as
console.log(myNumber2.toPrecision(3));;
console.log(myNumber.toPrecision(2));


console.log(myNumber.valueOf());
console.log(myNumber2.valueOf());

//Konverterer myNumber til string og sjekker typen av myNumberString etterpå
const myNumberString = myNumber.toString();
console.log(myNumber, typeof myNumberString);