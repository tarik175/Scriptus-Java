console.clear()
let fName="John"
let lName="Walker"

console.log(fName+" "+ lName)

console.log(fName.concat(lName))


//trim(): remove the spaces from the beginning and the end
let words="Today is wednesday   "

let trimmed=words.trim();

console.log(trimmed)


//charAt("index") return the character at that index. index starts from 0

let charAt4=words.charAt(4)
console.log(charAt4)


//split("charter"): returns an array that is splitted from this character
let splitted= words.split("  ")//split words from " " and return as array
console.log(splitted)

let states="AL,AK,AZ,AR,TX,NY,NF,FL"
let listOfStates=states.split(",")
console.log(listOfStates)