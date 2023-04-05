// Functions with argument
// function writeText(str){
//      document.getElementById("demo").innerHTML = str;
// }

//   //Calling out our function
//  writeText("Hello World");


// Functions with Argument and Parameters
// function addNumbers(num1, num2){
//      sum = num1 + num2;
//      document.getElementById("demo").innerHTML = sum
// }

// addNumbers(5, 10);

// Functions with Event
// function addNumbers(num1, num2){
//     sum = num1 + num2;
//     document.getElementById("demo").innerHTML =sum;
// }


// function showDialog(){
//     alert("Hello World!");
// } 



/*ASSEMENT
1. Create a function hello() to print "Welcome To Atlanta"

2. Create a fucntion of Bizmarrow() and call out, "Bizmarrow a Technology Institute" using an onclick event on a button element. 
*/


// function Hello(str){
//      document.getElementById("demo").innerHTML = str;
//  }
// Hello("Welcome To Atlanta");


// function showDialog(){
//     alert("Bizmarrow Technology Institute");
// }

// function Juliana(){
//     alert("Juliana Ahua is a Programmer")
// }


// function using return statment
// function addNumbers(num1, num2){
//     var sum = num1 + num2;

//     return sum;
// }


// document.getElementById("demo").innerHTML = addNumbers(2,5);


// Function with Event
// function getAge(age) {
//     var fullName = "John Doe";

//     document.getElementById("demo").innerHTML = fullName + " is " + age + " years";
// }

// document.getElementById("demo1").innerHTML = fullName;

var fruit = "apple";

function myFunc(){
    document.getElementById("demo").innerHTML = 
    "My Favourite fruit is " + fruit;
}

// var car = "Lexus";
//     function drive(){
//         document.getElementById("demo").innerHTML = 
//         "My favorite car is " + car;
//     }

// function toMiles(kilometer){
//     var miles = kilometer * 0.62137;

//     return kilometer + "kilometers " + "equals" + miles + "miles."; 
// }

// alert(toMiles(3));
// document.getElementById("demo").innerHTML = toMiles(10);

/* ASSEMENT 
Use function to convert centimeter to() to meter, use alert and document.write method to preview your output. 
*/

function toMeter(centimeter){
    var meter = centimeter * 0.01;

    return centimeter + "centimeter " + "equals " + meter + "meter."; 
}
alert(toMeter(1));
document.write(toMeter(10))