//method_overriding with constructors
class employee{
    constructor(name)
    {
        console.log(`${name} employee's constructor`)
        this.name=name
    }
    login(){
        console.log(`logged in`)
    }
    logout(){
        console.log(`logged out`)
    }
    Leaves(leaves){
        console.log(`employee has requested ${leaves} leaves`)
    }
}
class programmer extends employee{
    //this class is automatically created if there is no constructor in the child class 
    // constructor(...args){
    //     super(...args)
    // }
    constructor(name)
    {
        super(name)
        console.log(`${name} employee's constructor`)
        this.name=name
    }
    requestCoffee(x){
        console.log(`employee has requested ${x} coffees`)
    }
    Leaves(leaves){
        super.Leaves(leaves+1)
        console.log(`one extra provided`)
    }

}
// let emp=new employee()
// emp.login();
// emp.Leaves(5);
let prog=new programmer("khushi");
prog.requestCoffee(5);
prog.Leaves(4)