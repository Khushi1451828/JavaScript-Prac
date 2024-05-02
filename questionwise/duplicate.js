let arr = [1,2,3,4,2,6,3,7];

function remDup()
{
//   return [...new Set(arr)]
   return arr.filter((num,index)=>arr.indexOf(num) === index)
    
}
console.log(remDup())