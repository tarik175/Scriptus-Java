console.clear()

var personInfo={
    fName:"Jim",
    lName:"Carrey"
}
var personAddress={
    street:"6th Ave.",
    city:"NYC",
    state:"NY"
}
function salary(){
    return "100k yearly"
}


var person={
    name:personInfo,
    age:50,
    address: personAddress,
    hobbies: ["soccer","fishing","hunting"],
    salary: salary() 
    
}

console.log(person)