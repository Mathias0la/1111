const fruits = ["Banana", "Orange", "Apple", "Mango"];
/*
//Prints length of array
console.log(fruits.length);

//Example of length used in if statement
if(fruits.length <= 2) {
    console.log("Less than two fruits")
} else {
    console.log("More than 2 fruits");
}

//Will return array as a string
console.log(fruits.toString());

//Will return element at specified index, ex: array[index]
console.log(fruits[fruits.length - 1]);

//Change item on specified index * Works on const
fruits[0] = "Kiwi";


//Remove last item from list
let fruit = fruits.pop()
console.log(fruits);
console.log(fruit)

//Remove first item from list
let fruit2 = fruits.shift();
console.log(fruit2)

//Add item as last of list

fruits.push(fruit);
fruits.push("Melon");
console.log(fruits);

//Adds item as first of list

fruits.unshift("Mandarin");
fruits.unshift(fruit2);
console.log(fruits);
*/
//

const arr1 = ["Cecilie", "Lone"]
const arr2 = ["Emil", "Tobias", "Linus"]
const arr3 = ["Thomas"]

const myChildren = arr2.concat(arr1,arr3, "Bjørnar");
console.log(myChildren);

// Removes element from specified index

myChildren.splice(2,1);
console.log(myChildren);

//Get elements from array without deleting the items
console.log(myChildren.slice(2,4));

//Checks if array includes specified item
console.log(myChildren.includes("Cecilie"))

//Checks index of item
console.log(myChildren.indexOf("Cecilie"));

//Find the index of item in a list, returns the first matching item. If none returns -1
const newFruits = ["Banana", "Mango", "Melon", "Banana"];
console.log(newFruits.indexOf("Banana"))

//Sort the array
newFruits.sort();
console.log(newFruits)

//Reverses the list
newFruits.reverse()
console.log(newFruits)

//Joiner alle elementer sammen til en string
console.log(newFruits.join(" , "));

