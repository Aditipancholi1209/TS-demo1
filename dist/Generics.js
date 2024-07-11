"use strict";
// General = common = Generic
// const funct =(n: number): number=>{
//     return n
// }
const funct = (n) => {
    return n;
};
// any should be avoided ; there's no point of typescript
// so we'll make a generic function for it
const functt = (n) => {
    // let text:CustomType=n
    return n;
};
// const ans = functt(20) // when we know that we've to send number only 
const an = functt('test');
const n = functt(true);
const myfunction = (n) => {
    return n;
};
const Person1 = {
    name: "Abhi",
    age: 109
};
const ans = myfunction(Person1);
// <!----------------------------!>
// generic usage while declaring array 
const array = [];
const array1 = [];
// <!----------------------------!>        object
const functionGeneric = (n, o) => {
    return { n, o };
};
const def = functionGeneric(12, '21');
const player = {
    name: "dhoni",
    age: 50
};
const player1 = {
    name: "jadeja",
    age: 40
};
const functionGeneric1 = (n, o) => {
    return { n, o };
};
const efg = functionGeneric(player, player1);
