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

var asnwers=[];

function isValid(answer){
    if(!(answer =="yes" || answer=="no")){
        answer="Invalid";
    }
    return answer;
}

function printAnswers(){
    for(var i=0; i<asnwers.length; i++){
        console.log(asnwers[i]);
    }
}

function isHappy(){
    var happy=prompt("Are You Happy?(Yes/No)").toLowerCase();
    asnwers.push(happy=isValid(happy));
}

function isUseful(){
    var useful=prompt("Did You Find This Website Useful?(Yes/No)").toLowerCase();
    asnwers.push(useful=isValid(useful));
}

function isWorking(){
    var working=prompt("Did Everything Work Properly?(Yes/No)").toLowerCase();
    asnwers.push(working=isValid(working));
}

isHappy();
isUseful();
isWorking();
printAnswers();