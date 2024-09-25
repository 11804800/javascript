function a2(name,age,email)
{
    this.name = name;
    this.age = age;
    this.email = email;
}

function a3(name,age,email)
{
    return name, age,email;
}

const obj=new a2("nikhil",32,"email@gmail.com");
const obj2=new a3("nikhil",23,"email@gmail.com");
console.log(obj2);
console.log(obj);