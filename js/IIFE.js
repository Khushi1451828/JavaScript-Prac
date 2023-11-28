//IIFE----------immediately invoked function expression---------------

let a=()=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(456)
        },4000)
    })
}

(async()=>{

    let b=await a()
    console.log(b)
    let c=await a()
    console.log(c)
    let d=await a()
    console.log(d)
    
    
})()
//b , c or d ka scope sirf 👆 function tak rhega agr asyncs function use nhi krnge to b,c or d ko golbally access kia ja skta hai