// document.getElementById("btn").onclick = function() {
//     alert("Registeration Unsuccessful")
// }

// ANSWER 2
// var text = `{
//     "Car1": "Mazda",
//     "Car2": "Benz",
//     "Car3": "Toyota",
//     "Car4": "Jeep",
//     "Car5": "Lexus"
// }`;

// var obj = JSON.parse(text); //To return an object

// document.getElementById("demo").innerHTML = obj.Car1 + " " + obj.Car2 + " " + obj.Car3 + " " + obj.Car4 + " " + obj.Car5;

// ANSWER3
// var phone1 = ["iPhone", "Redmi", "Samsung"];
// var phone2 = ["Xiomi", "Nokia", "Tecno"];

// var arr = phone1.concat(phone2);
// document.write(arr);

// // ANSWER4
// const food = {
//     food1: "Rice",
//     food2: "Stew",
//     food3: "meat"
// };

// let txt = "";
// for(let x in food){
//     txt += food[x] + " "; 
// }

// document.getElementById("demo").innerHTML = txt;

// // ANSWER5
// function validationForm(){
//     var userName = document.getElementsByName
//     ("UserName")[0].value; var length = userName.length;
//     if(length > 10){
//         alert("you cannot input more than 10 characters!");
//         return false;
//     }

// }

// ANSWER6
var text1 = ["Bizmarrow Technology is"];
var num = 10;
var text2 = ["Years"];
document.getElementById("demo").innerHTML = text1 + " " + num + " " +text2;


// ANSWER8
function makeRequest(){
        httpRequest.onreadystatechange = writeContent;
    
        httpRequest.open("GET", "https://codeliber.com/test.php");
        httpRequest.send();
    }
    
    function writeContent(){
        if(httpRequest.readyState === 4){
            if(httpRequest.status == 200){
                document.getElementById("demo").innerHTML = httpRequest.responseText;
            }else{
                alert("There was a problem with the request");
            }
        }
    }