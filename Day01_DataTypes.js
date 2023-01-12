
console.clear()
/*
Primative Data type in JS
string,number,boolean,null,undefined

*/



var myName= "javascript"
console.log(typeof(myName));//"string"


var myName= "java"
console.log(typeof(myName));//"string"


/*

Number literal:
we only have number data type. No int, double, byte
*/

var myNum=20;
console.log(typeof(myNum));//"number"
var myNum=20.9;
console.log(typeof(myNum));//"number"

var myNum=20/0;
console.log(myNum);//"Infinity"
console.log(typeof(myNum));//"number"

/*
String overloads in concatination
*/


var num1=20+"a";
console.log(num1);//"20a"
console.log(typeof(num1));//"String"

var num2="a"+20;
console.log(num2);//"a20"
console.log(typeof(num2));//"String"





/*

Boolean:
True or False

*/

var isExist=true;
console.log(isExist);//"true"
console.log(typeof(isExist));//"boolean"


/*
null
*/

var pickedColor=null;
console.log(pickedColor);//null
console.log(typeof(pickedColor));//"object"
