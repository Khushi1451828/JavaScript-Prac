try{
    throw new Error("this is custom one")
}
catch(err){
console.log(err. name)
console.log(err.message)
console.log(err.stack);
}