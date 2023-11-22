let a = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert("hey i am resolved");
        resolve(1);
    },2000)
})
let p1=a.then(()=>{
    console.log("congratulations promise is finally resolved")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(4);
        },6000)
    })
}).then((value)=>{
    console.log(value)
})
p1.then(()=>{
    alert("hurray!!!")
})