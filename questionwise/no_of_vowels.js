let str="khushi"
let clean = str.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
function countVowel()
{
    let count=0;
    let arr=clean.split('')
    // console.log(arr)
    arr.forEach((letter)=>{
        if(letter == 'a'||letter == 'e'||letter == 'i'||letter == 'o'||letter == 'u')
        {
            count++;
        }
    })
    return count;
}
console.log(countVowel())