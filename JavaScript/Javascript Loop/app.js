// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for(let i = 0; i < cars.length; i++){
//     text += cars[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text;



// let text = "";

// for(let i = 0; i <10; i++){
//     text += "The number is " + i + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

/* From the example above, you can read:

Expression 1, sets a variable before the loop starts (let i = 0).

Expression 2 defines the condition for the loop to run (i.e must be less than 10).

Expression 3 increases a value (i++) each time the code blocks in the loophas been executed. 
*/


// The For in loop 
// The Javascript For in ststament loops through properties of an object;
// Syntax
// For(key in object){  code block to be executed.
// }


const Person = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let txt = "";
for(let x in Person){
    txt += Person[x] + " "; 
}

document.getElementById("demo").innerHTML = txt;






/*
The for in loop iterates over a person object. Each iteration returns a key(x)
The key is used to access the value of the key
The value of the key is person[x].
*/ 

/*The while loop
The while loop loopsthrough a block of code as long as a specified condition is true.
*/

//  syntax
// while(condition){
//      code block to be executed
// }


// let text = "";
// let i = 0;
// while(i < 10){
//     text += "<br> The number is " + i; i++;
// }

// document.getElementById("demo").innerHTML = text;




/* The for in loop iterates over a person object. Each iteration returns a ey(x)*/ 


/*ASSESMENT
1. Use contional statement of else to print out an output implemented with an eventlistener of onclick, output is "Registeration unsuccessful".
You can declare a suitable condition of your choice. 

2. Declare a JSON property of cars and convert it to an object to print out a specific key value of the object. 

3. Create two different arrays and merge them togetehr to become a single array. 

4. Using a for in loop, loop through an object of not less than 5 key values pair.

5. Validate a form to store data on the web server.

6. Concatenate the string, "Bizmarrow Technology is," with an integar value of 10 and a string of "years".

7. If i happened to be 18years old, am i qualified to vote for the just concluded 2023 elections, if yes, declare a conditional statment to prove your choice of output.

8. What do you understand by AJAX, use a "GET" method to implement an example of how AJAX works.

9. With vivid example, show how logical sttament works, using logical AND, OR, and NOT. 
*/