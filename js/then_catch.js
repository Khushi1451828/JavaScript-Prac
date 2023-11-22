const p = new Promise((resolve, reject) => {
  console.log("i am waiting for the promise");
  setTimeout(() => {
    // console.log("promise is rejected");
    //declaring the state and value of the promise
    reject(new Error("i am an error"));
    //it will show the error in the console the state is "rejected" and value is "i am an error"
//   console.log(p);
},5000);
  
});
//it will show the pending status because settimeout is the ASYNCHRONOUS function so it will execute after this
// console.log(p);


const p1 = new Promise((resolve, reject) => {
    console.log("i am waiting for the promise");
    setTimeout(() => {
    //   console.log("promise is resolved");
      //state and value of the promise
      resolve(true);
      //show the state is "fulfilled" and value is true
    //   console.log(p1);
    }, 5000);
  });
  //pending state
//   console.log(p1);
//it will handle the error and show the statement that we want want to show in the console
p.catch((error)=>{
    console.log("oops there is an error occured");
})
  p1.then((value)=>{
    console.log("i am resolved");
    console.log(p1);
  })
  