message="good global"
function hello1(){
    //this declaration will be scoped in these braces only
let message="good morning"
 
    //this initialization will be in the range of this braces only
  //let  message="good afternoon"
    console.log("Hello 1 : "+message)

//this will print good morning in the console
//console.log(message)
//👇clousure
let c = function hello2()
{
    console.log("i am c : "+message)
} 
return c;
}
//👆clousure
c=hello1()
//this will print outermost declared message
console.log(message)
c()