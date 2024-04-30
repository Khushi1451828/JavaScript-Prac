let line="hello world i am javascript a scripting programming lenguage";
let word = line.split(' ')
console.log(word)
function findLongestWord()
{
    LongestWord="";
    let maxLength=0;
    for(let i=0;i<word.length;i++)
    {
        if(word[i].length > maxLength)
        {
            maxLength = word[i].length;
            LongestWord=word[i];
        }
    }
    return LongestWord;
}
console.log(findLongestWord())