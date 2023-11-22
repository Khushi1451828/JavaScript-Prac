// let ins=document.getElementsByTagName('header')[0];

// //html insertion using innerHTML method
// ins.innerHTML=ins.innerHTML+'<h1>hey!</h1>';

// //html insertion using createElement method for big size of insertions
// const create=document.createElement('header');
// create.innerHTML='<h1><i>hey geeks!</i></h1>';

// //append means add the element at the end of the selected element/node
// document.body.append(create);

const ins2=document.getElementsByTagName('div')[0];
const create2=document.createElement('div');
create2.innerHTML='<h3><u>ohooooohoo</u></h3>';
//in the container set element in the end of the container
ins2.append(create2);
//in the container set element in the begining of the container
ins2.prepend(create2);
//out of the container set the element before the container
ins2.after(create2);
//out of the container set the element after the container
ins2.before(create2);

//****all of these will not work at the same time with the same selected node*******//





