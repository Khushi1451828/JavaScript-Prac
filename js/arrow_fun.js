const sayHello=(name)=>console.log("Hello "+name)

const x={
    name:"khushi",
    role:"developer",
    branch:"CSE",
    show:function(){
        //let that=this
        //console.log(this)
        setTimeout(()=>
        {
            //arrow fuction uses lexical "this"
            console.log(`the name is ${this.name}\nThe role is ${this.role}`)

        },2000)
    }
}
//sayHello("khushi");
//console.log(x.name,x.role)
x.show()