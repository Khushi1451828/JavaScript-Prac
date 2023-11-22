async function k(){
    let delhi=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 deg")
        },5000)
    })
    let mumbai=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 deg")
        },8000)
    })
    console.log("fetching delhi weather please wait...")
let D = await delhi;
// here the keyword await means that wait until the promise is not fulfilled the func will not be further executed
console.log("delhi weather "+ D)
console.log("fetching mumbai weather please wait...")
let M = await mumbai;
console.log("mumbai weather "+ M)
console.log("welcome to weather control room")

return [D,M];
}
let res=k();
res.then((value=>{
    console.log(value)
}))
