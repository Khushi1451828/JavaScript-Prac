let str="Naman";
function palin()
{
    let convertStr=str.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    console.log(convertStr);
    let rev=convertStr.split('').reverse().join('');
    console.log(rev)
    if(convertStr === rev){
        return true;
    }
    else{
        return false;
    }
}
console.log(palin())