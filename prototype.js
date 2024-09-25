const user={
    name: 'John Doe',
    age: 30,
    toString:function(){
        console.log("heelo");
    }
}

console.log(Object.getPrototypeOf(user));
console.log(user.__proto__);

//shadowing property

const a={
    a:1,
    b:2
}
const c={
    d:12,
    e:12
}

Array.prototype.map=function(obj){
    console.log(obj);
}

const arr=[1,2,3,4];
arr.map((i)=>{
    console.log(i);
});

Object.setPrototypeOf(c,a);
console.log(c.__proto__);



const a1={
    name:"a",
    y:{
        c:"b",
        n:function(){
            z=()=>{
                console.log(this);
            };
            z();
        }
    }
}

a1.y.n();

//lexical scoper 
//shahdow property
//prototype chaining
//global and window object;

//bom browser object model confirm alert prompt;