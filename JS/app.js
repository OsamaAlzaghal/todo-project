var Name=prompt("Please Enter Your Name:");
var gender=prompt("Please Enter Your Gender(male/female):");
var age=prompt("Please Enter Your Age:");

if(age<=0){
    alert("Your age is less than or equal to zero!");
}

var skip=confirm("Do You Want To Skip The Welcoming Message?");

if (skip==false){

    if(gender=="male"){
        alert("Welcome To The Page Mr." + Name);
    }
    else if(gender=="female"){
        alert("Welcome To The Page Ms." + Name);
    }
    else {
        alert("Welcome To The Page " + Name);  
    }
}
