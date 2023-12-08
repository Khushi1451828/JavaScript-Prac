//regular expressions in JS

//👇making word "bad" global to select multiplle
const regex=/bad/g
//if we want to select every word that is occuring multiple times in a sentence then we will use regular expression 
const text="bad khushi is bad very bad girl"
console.log(text.replace(regex,"good"))