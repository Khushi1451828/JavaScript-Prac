class Animal{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name + " is running")
    }
    shout(){
        console.log(this.name + " is shouting")
    }
}
class monkey extends Animal{
    // constructor(name,color){
    //     this.name=name;
    //     this.color=color;
    // }
    // run(){
    //     console.log(this.name + "is running")
    // }
    // shout(){
    //     console.log(this.name + " is shouting")
    // }
    // eatBanana(){
    //     console.log(this.name + " eating")
    // }

    //---------👆you can do also like this but to make this easier we should use inheritance

    eatBanana(){
           console.log(this.name + " eating")
    }
}
//objects of classes
let ani=new Animal("horse","brown")
let m=new monkey("bajrag","brown")

ani.shout()
m.eatBanana()