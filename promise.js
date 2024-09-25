//promise.all(); //promise.all if all the promise the return good if one reject all rejected
//promise.any(); //even if one of that is fullfilled return if one rejected and two work it will return
//promise.race(); //return the fast one

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 1000);
});
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failed");
    }, 3000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success');
    }, 4000);
});

Promise.all([promise,promise1, promise2]).then((result)=>console.log(result)).catch((err)=>console.log(err));
Promise.any([promise,promise1, promise2]).then((result)=>console.log(result)).catch((err)=>console.log(err));
Promise.race([promise,promise1, promise2]).then((result)=>console.log(result)).catch((err)=>console.log(err));


//SPREAD SYNTAX  means expanding 

const arr=[1,2];
const mul=(a,b)=>{
    return a*b;
}

console.log(mul(...arr));

//REST SYNATX   means collecting

const arr1=[1,2,3,4,5,6];
const map=(...item)=>{
    item.forEach(function(i){
        console.log(i);
    });
}
map(...arr1);

