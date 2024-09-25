const user={
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
}


function printDetails(colors,size)
{
    console.log("Details");
    console.log("name "+this.name+" age "+this.age+" email "+this.email);
    console.log("exta details");
    console.log("colors "+colors+" size "+size);
}

const user2={
    name: 'Jane Smith',
    age: 25,
    email: 'janesmith@example.com',
}

console.log("call");
printDetails.call(user2,"pink",23);
console.log("bind");
const user3=printDetails.bind(user,"pink",23);
user3();
console.log("apply");
printDetails.apply(user,["Red",48]);




//apply is same as call but the arguments are in array
//bind will return the function and we can call it by simply storing it