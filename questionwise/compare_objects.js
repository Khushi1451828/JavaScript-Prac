//Write a JavaScript program to compare two objects to determine 
// if the first contains equivalent property values to the second one.
function compareObjects(obj1,obj2)
{
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)
    {
        return false;
    }
    for(let key of keys1)
    {
        if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object')
        {
            if(!compareObjects(obj1[key],obj2[key]))
            {
                return false;
            }
        }
        else{
            if(obj1[key] !== obj2[key])
            {
                return false;
            }
        }
    }
    return true;
}
const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { a: 1, b: { c: 2, d: 3 } };
const obj3 = { a: 1, b: { c: 2, d: 4 } };

console.log(compareObjects(obj1, obj2));
console.log(compareObjects(obj1, obj3));