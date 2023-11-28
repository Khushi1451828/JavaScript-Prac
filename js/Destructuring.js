let arr=[3,5,8,5,6,7,8,9,0]
//no need to do this👇
// let a=arr[0];
// let b=arr[1];


// let [a,b,c,d,...rest]=arr;
// console.log(a,b,c,d,rest);

// let [a, ,b , ,...rest]=arr;
// console.log(a,b,rest);

//destructure the object
let {a,b}={a:1,b:2}
console.log(a,b);
 
//spread operator
let arr1=[3,5,6];
let obj1={...arr1};
console.log(obj1)
const sum =(v1,v2,v3)=>{
    return v1+v2+v3;
}
console.log('sum='+sum(...arr1))

let obj2={
    name:"khuhsi",
    branch:"civil",
    reg_No:20054
}
console.log({obj2,branch:"CSE"})
//spread will update the object 
console.log({...obj2,branch:"CSE",name:"khushi sharma"})

