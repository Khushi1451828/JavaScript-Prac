// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("i am promise no. 1")
//         resolve(20);
//     },3000)
// })
// p1.then((value)=>{
//     console.log(value);
//     let p2=new Promise((resolve,reject)=>{
//         setTimeout(()=>{console.log("i am pr") 
//     resolve(30);
// },3000);
//       return p2;  
//     }).then((value)=>{
//         console.log(value);
//         return 2;
//     }).then((value)=>{
//         console.log("finally i am the last promise of this chain");
//     })
// })

const loadScript=()=>{
    let script=document.createElement("script")
    script.type="taxt/javascript"
    script.src="https://www.youtube.com/iframe_apt"
}