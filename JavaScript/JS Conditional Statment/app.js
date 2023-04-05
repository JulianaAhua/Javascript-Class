// if conditional statement 
// var age = 21;
// if (age > 18){
//     alert("User is old enough to vote");
// }

// If else conditional stament 
var age = 15; 
if(age > 18){
    alert("User is old enough to register for scholraship")
}
else{
    alert("User is not old enough to register for scholarship")
}

document.getElementById("submit").addEventListener("click", function(){
    var age = document.getElementById("age").value;
    if(age > 18){
        alert("User is old enough to vote");
    }else{
        alert("User is not old enough to vote")
    }
})