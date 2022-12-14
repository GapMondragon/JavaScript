// JavaScript Review!!! 
// console.log("Hello byeeeeeee");
// https://youtu.be/W6NZfCO5SIk

let firstName = "Gabriel Paolo";
let lastName = "Mondragon";
console.log(firstName + " " + lastName);

// let name = "Gabe"; // string literal
// let age = 27; // number literal 
// let isApproved = false; // boolean literal
// let pet = undefined;
// let selectedColor = null;

console.log("-------------------------------------")

console.log("-------------OBJECTS-----------------")
let person = {
    name: "Gabe",
    age: 27
}

console.log(person)


// Dot Notation
person.name = "Wednesday Addams";
console.log(person.name)


// Bracket Notation
let selection = "name";
person[selection] = "Enid";
console.log(person.name)

console.log(person)

console.log("-------------------------------------")
console.log("-------------ARRAYS------------------")

let selectedColors = ["red", "blue"]
console.log(selectedColors)

selectedColors[2] = "green"
console.log(selectedColors)
console.log(selectedColors[1])

console.log("The length of the array 'selectedColors' is " + selectedColors.length)


console.log("-------------------------------------")
console.log("------------FUNCTIONS----------------")


function greet(firstName, middleName, lastName){
    console.log("Hi " + firstName + " " + middleName + " " + lastName + "! <3");
}
greet("Anya Josephine", "Marie", "Taylor-Joy");


function square(number){
    return number * number;
}
let number = square(3)
console.log(number)