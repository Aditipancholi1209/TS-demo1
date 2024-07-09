"use strict";
const message = "hello world";
let a = 23;
let check = true;
let num = 34;
let abc = "aditi";
let both;
both = 34;
both = "both";
console.log("🚀 ~ check:", check);
console.log("🚀 ~ a:", a);
console.log("🚀 ~ message:", message);
// any - datatype
const func = (n, m) => {
    console.log(n, m);
    return String(n * m);
};
// const funcc = (n:number, m:number): number =>{
//     console.log(n,m);
//     return String(n * m) ;
// }
const funccc = (a) => {
    if (typeof a == "string") {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a, "type");
    }
};
funccc(2);
