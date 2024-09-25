class Animal{
    constructor(name)
    {
        this.name = name;
    }

    get()
    {
        console.log(this.name);
    }

}

class Dog extends Animal
{
    constructor(name)
    {
        super(name);
        this.name = name;
    }
    //overriding
    //overloading
    get(breed)
    {
        super.get();
        console.log(this.name+" "+breed);
    }
}

const ob=new Animal("ravi");
const ob1=new Dog("Doggy");
ob.get();
ob1.get("dabarman");