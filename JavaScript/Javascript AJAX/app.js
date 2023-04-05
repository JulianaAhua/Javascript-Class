// var httpRequest = new XMLHttpRequest;

// function makeRequest(){
//     httpRequest.onreadystatechange = writeContent;

//     httpRequest.open("GET", "https://codeliber.com/test.php");
//     httpRequest.send();
// }

// function writeContent(){
//     if(httpRequest.readyState === 4){
//         if(httpRequest.status == 200){
//             document.getElementById("demo").innerHTML = httpRequest.responseText;
//         }else{
//             alert("There was a problem with the request");
//         }
//     }
// }


// Post Request with AJAX 
var httpRequest = new XMLHttpRequest();

function sendPostRequest(){
    httpRequest.onreadystatechange = writeContent;

    httpRequest.open("POST", "https://codeliber.com/test.php"); httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    httpRequest.send("firstName-John&lastName = Doe");
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
    