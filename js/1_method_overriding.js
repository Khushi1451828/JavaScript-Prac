//method_overriding with classes
class employee{
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
let prog=new programmer();
prog.requestCoffee(5);
prog.Leaves(4)