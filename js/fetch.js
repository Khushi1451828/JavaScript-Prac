let a=fetch("https://foodish-api.herokuapp.com/images/pizza")
a.then((response)=>{
    console.log(response.status)
    console.log(response.ok);
    console.log(response.headers);
    
    // return value1.json()
}).then((value2)=>
{
     console.log(value2); 
})