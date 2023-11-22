document.write('khushi sharma');
//after 5 sec slert box will display
let a=(()=>{
    alert("i am here");
},5000);
// //first of all prompt box is shown if we type no it will do not show the alert box otherwise after 5sec alert box will display on the browser
const b=prompt('are you agree');
if(b=='no')
{
    clearTimeout(a);
}
console.log(a);

//___________________time_interval___________________(but both are not working at the same)
//after every 3 secs it will show alert box
const c=setInterval(() => {
    alert("hey! bewakoofs");
}, 3000);
//it will display prompt box if we input in the box="no" then interval will stop and no display of alert otherwise repeatedly will show the alert box
const ans=prompt("you want?");
if(ans=="no")
{
    clearInterval(c);
}