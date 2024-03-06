// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
function area(a,b,c)
{
    const s=(a+b+c)/2;
    const ar=Math.sqrt(s*((s-a)*(s-b)*(s-c)));
    return (ar+' or '+Math.round(ar)+'<- round and floor->'+Math.floor(ar));
    
}
function result()
{
    const a=5,b=6,c=7;
    return area(a,b,c);
}
console.log(result())