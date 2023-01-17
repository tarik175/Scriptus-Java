
const x=[1,2,3,4,5]
console.log(x[0])




const [y, z]=x;
console.log(y)
console.log(z)


const user={
    id:42,
    isVerified:true
}
console.log(user.id)


const {id, isVerified}=user;
console.log(id)
console.log(isVerified)




var user1={
    fName:"Sam",
    location:"Dallas",
    email:"sam@fakeemail.com"
}
console.log(user1.fName)


var name1=user1.fName
console.log(name1)



var {fName, location}=user1;
console.log(fName)



function getUser(){
    return{
        name2:"Samey",
        location2:"NYC",
        email2:"sam@gmail.com"
    }
}

var {name2,location2,email2}=getUser()
console.log(name2)


var user2=["tim","LA","tim@yahoo.com"]

var [userName,userLocation,userEmail]=user2
console.log(userName)
console.log(userLocation)
console.log(userEmail)
// nested array elements
const arrValue = ['one', ['two', 'three']];

// nested destructuring assignment in arrays
const [x, [y, z]] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three












