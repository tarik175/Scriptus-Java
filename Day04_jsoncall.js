console.clear()
var fName="John"
var lName="Cash"
var age=18


console.log(`${fName} ${lName} ${age}`)

var person={
    fName:"John",
    lName:"Cash",
    age:18,
    isEmployed:true
}

console.log(person)
console.log(person.fName)
person.fName="Sam"

console.log(person.isEmployed)

person.isEmployed=false
console.log(person.isEmployed)


//changing lName and age using [] notation

person["lName"]="blair";

//editting value

var newName="fName"
person[newName]="William"
console.log(person)
