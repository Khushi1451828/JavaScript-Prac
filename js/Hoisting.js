//following two lines will run successfully due to JavaScript hoisting
//appears due to hoisting👇
//var a
console.log(a)
greet();
//function will appears or pretend to move the declaration on the top of the code
function greet()
//it will throw error that greet is not a function bcz " by var function expressions cannot be hoisted"
//var greet=function()
{
    console.log("good morning")
}
var a=9;//declaration hoisted to the top but initialization is not with let and const
console.log(a)