const c=document.getElementById('head');
c.className='bg border';
//retunrs all existing values of class attribute of the selected node 
console.log(c.classList);

//add class(1 or more)
console.log(c.classList.add('color','black'));

//remove classes(1 or more)
console.log(c.classList.remove('color'));

//if class is exist than removes it otherwise add it
console.log(c.classList.toggle('black'));

//if class is exists returns true otherwise false
console.log(c.classList.contains('black'));