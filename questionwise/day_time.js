// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let date = new Date()
function dayName()
{
    return(
    Intl.DateTimeFormat('en-US',
    {weekday:'long'}
    ).format(date)
    )
}
console.log('Today is : ' + dayName() + '.')
let hours = date.getHours();
const ampm = hours>=12 ? 'PM' : 'AM';
hours = hours%12;
hours = hours?hours:12;
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log('Current time is : '+hours+' ' +ampm+' : '+minutes+' : '+seconds)