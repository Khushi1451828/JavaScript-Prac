let a1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved with 1");
    },2000);
})
let a2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("resolved with 2");
        reject(new Error("error!!!") )
    },3000);
})
let a3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("resolved with 3");
    },4000);
})
// a1.then((value)=>{
// console.log(value);
// }
// )
// a2.then((value)=>{
// console.log(value);
// }
// )
// a3.then((value)=>{
// console.log(value);
// }
// )
//let promise_all=Promise.all([a1,a2,a3])
//let promise_all=Promise.allSettled([a1,a2,a3]);
//let promise_all=Promise.race([a1,a2,a3]);
//let promise_all=Promise.resolve(6);
let promise_all=Promise.reject(6);

promise_all.then((value)=>{console.log(value);}
)
