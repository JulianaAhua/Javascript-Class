// // gets the value of the lang attributes of <html>
// alert(document.documentElement.getAttribute("lang"));

// // gets the content if the <title> inside the <head>
// alert(document.head.firstElementChild.innerHTML);

// // changes the background color of the <body>
// document.body.style.backgroundColor = "green";

// selecting elements by class  Name using DOM 
// lets select elements with "big-green" class name 
// var element = document.getElementsByClassName ("big-green");

// // Lets access each selected element
// for(let i = 0; i < element.length; i++){
//     // lets have each selecteds element
//     element[i].style.fontsize = "20px";
//     element[i].style.color = "green";
// }



// Assessment
// From the element content below, select Elements by Tag Name to display a red color of h3
// <h3>Hello World</h3>
// <p>Lorem Ipsum</p>
// <h3>Welcome to Codelibre</h3>
// <p>Lorem Ipsum dolor sit amet</p>


var element = document.getElementsByTagName ("h3");
for(let i = 0; i < element.length; i++){
         element[i].style.fontsize = "20px";
         element[i].style.color = "blue";
     }
