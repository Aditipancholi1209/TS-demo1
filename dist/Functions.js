"use strict";
// Optional parameter
const DummyFunc = (a, b, c) => {
    if (typeof c === "undefined") {
        return console.log(a * b, "a*b");
    }
    else {
        return a * b * c;
    }
};
func(2, 6);
// Default Parameter 
const DummyFunc2 = (a, b, c = 10) => {
    return a * b * c;
};
DummyFunc2(20, 40);
const DummyFunc3 = (...m) => {
    return m;
};
DummyFunc3(10, 20, 30, 40, 50);
function DummyFunc4(n) {
    return 45;
}
const getData = (object1) => {
    console.log(object1);
};
const product1 = {
    name: 'Aditi',
    address: 'Ahmedabad',
    age: 23,
    photo: "heeuheue",
    id: 'hhs9shjs'
};
const product2 = {
    name: 'Aditi',
    address: 'Ahmedabad',
    age: 23,
    photo: "heeuheue"
};
getData(product1);
//never type 
const ErrorHandler = () => {
    throw new Error();
};
//return time
const ErrorHandler2 = () => {
    return new Error();
};
const theme = "light";
console.log("🚀 ~ theme:", theme);
