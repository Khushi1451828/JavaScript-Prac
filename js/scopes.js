//SCOPES IN JAVASCRIPT-1. Local_scope = block scope and function scope
                     //2. global_scope

{
    // let and const have block level scope so the console cannot show the value of a from outside of these braces
    //var has the global level scope
    var a=8;
}
console.log("a="+a);

//p will be global
let p=17
function ks(){
    let ap=22
    console.log("value of p in the braces = "+p)
    return(ap)
}
console.log("ks="+ks())
//this will not return the value of ap because ap is block leveled
//console.log(ap)

console.log("value of p outside the braces ="+p)