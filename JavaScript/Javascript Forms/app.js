// function getValue(){
//     var val = document.getElementById("firstName").value;alert("The value is " + val);
// }

// function getValue(){
//     var val = document.getElementsByName("firstName")[0].value;alert("The value is " + val);
// }

// function validation() {
//     var firstName = document.getElementsByName("firstName")[0].value;
//     if(firstName == ''){ 
//         alert('please enter a value on the text field');
//         return false;

//     }
// }


function validationForm(){
    var userName = document.getElementsByName
    ("UserName")[0].value; var length = userName.length;
    if(length > 10){
        alert("you cannot input more than 10 characters!");
        return false;
    }

}


// function validationForm() {
//     var age = document.getElementsByName
//     ("age < 18")
//     if(age < 18){
//         alert('The age of the user is less than 18, form will not be submitted');
//         return false;
//     }

// }