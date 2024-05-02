let str1="khushi";
let str2="sharma"
function anagram()
{
   let first= str1.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
   let second= str2.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
// console.log(first,second)
   if(first.length !== second.length)
   {
    return false;
}
let sort1=first.split('').sort().join('');
let sort2=second.split('').sort().join('');
// console.log(sort1,sort2)
if(sort1 === sort2)
{
    return true;
}
else{
    return false
}
}
console.log(anagram());