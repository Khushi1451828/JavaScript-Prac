function isLeapYear(year)
{
    if((year%4 == 0 && year%100 !== 0)||(year%400 === 0))
    {
        return true;
    }
    else{
        return false;
    }
}

    let years = [2000,2001,2002,2003,2004];
    years.map(year=>{
if(isLeapYear(year))
{
    console.log(year + " is leap year")
}
else{
    console.log(year + " is not a leap year")
}
        })
