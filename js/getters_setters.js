class Animal{
    constructor(name)
    {
        this._name=name
    }
    fly()
    {
        console.log("i am flying")
    }
    //_name isliye kiya kuki already humne name naam se getter bnaya hai or fir constructer me bhi change krr denge
    get name()
    {
        return this._name
    }
    set name(newName)
    {
        this._name=newName;

    }
}

class monkey extends Animal{
    eat()
    {
        console("monkey loves eat banana")
    }
}
let ani = new Animal("kaalu")
ani.fly();
console.log(ani.name)
ani.name="baalu"
console.log(ani.name)
let c=5
let mon = new monkey();
//instanceof operator
//it returns true if object belongs to the class or any other class inheriting from it

//it returns true becausen ani named object belongs to the class Animal
console.log(ani instanceof Animal)
//it returns false because c not belongs to the class Animal
console.log(c instanceof Animal)
//it returns true because the class monkey inheriting the class Animal
console.log(mon instanceof Animal)
