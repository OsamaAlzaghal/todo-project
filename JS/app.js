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

function isvalid(answer){
    if(!(answer =="yes" || answer=="no")){
        answer="Invalid";
    }
    return answer;
}

function PrintAnswers(){
    for(var i=0; i<asnwers.length; i++){
        console.log(asnwers[i]);
    }
}

function Q1(){
    var happy=prompt("Are You Happy?(Yes/No)").toLowerCase();
    asnwers.push(happy=isvalid(happy));
}

function Q2(){
    var isuseful=prompt("Did You Find This Website Useful?(Yes/No)").toLowerCase();
    asnwers.push(isuseful=isvalid(isuseful));
}

function Q3(){
    var isworking=prompt("Did Everything Work Properly?(Yes/No)").toLowerCase();
    asnwers.push(isworking=isvalid(isworking));
}

Q1();
Q2();
Q3();
PrintAnswers();