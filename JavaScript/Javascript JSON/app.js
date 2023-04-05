// var person = {
//     name: "John Doe",
//     age: 30, 
//     showDetails: function() {
//         alert(this.name + " is " + this.age +" years old.");
//     }
// };

// An object in An Object, commonly known as nested object
// var fruits = {
//     mango: {
//         color: "yellow",
//         taste: "sweet"
//     },

//     apple: {
//         color: "red",
//         taste: "sweet"
//     }
// }

// document.write(fruits.apple.color);


// JSON Declartation, converting JSON to object
// var text = `{
//     "firstName": "John",
//     "lastName": "Doe",
//     "age"; 30,
//     "isMarried": true
// }`;

// var obj = JSON.parse(text); //To return an object

// console.log(obj.firstName + " " + obj.lastName + " is " + obj.age + " years old.");


// /JSON Declaration, converting JSON to Object
var text = `{
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isMarried": true
}`;

var obj = JSON.parse(text); //To return an object

document.getElementById("demo").innerHTML = obj.firstName + " " + obj.lastName + " is " + obj.age + " years old.";


// converting Javascript Object to JSON
// var text = {
//     "firstName": "John",
//     "lastName": "Doe",
//     "age": 30,
//     "isMarried": true
// };

// var num = JSON.stringify(text);
// document.getElementById("demo").innerHTML = num;