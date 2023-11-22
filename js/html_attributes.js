const attr=document.getElementById('line');
//return true if class attribute is present in the html page otherwise false
console.log(attr.hasAttribute('class'));
//return the value of the attribute
console.log(attr.getAttribute('class'));
//add the attribute and it's name and remove previoue value of same attribute
console.log(attr.setAttribute('class','wow'));
console.log(attr.getAttribute('class'));
console.log(attr.removeAttribute('class'));
console.log(attr.hasAttribute('class'));
//return all attributes present in the selected element
console.log(attr.attributes);

console.log(attr.dataset);
console.log(attr.dataset.first);
console.log(attr.dataset.last);
