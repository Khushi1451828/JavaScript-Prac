const promise = new Promise(function(resolve,reject)
{
    console.log("hello 4");
    resolve (30);
})
console.log("hello 1");
const two=setTimeout(function(){
console.log("hello 2");
},2000);
console.log("hello 3");
console.log(promise);
