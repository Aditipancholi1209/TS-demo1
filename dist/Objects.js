"use strict";
const Details = {
    firstname: "Aditi",
    lastName: "Pancholi",
    Age: 23
};
const Details2 = {
    firstname: "Aditi",
    lastName: "Pancholi",
    Age: 23
};
const newObj = {
    firstname: '',
    lastName: '',
    Age: 34,
    idNumber: 52380,
    functype: (n, m) => {
        console.log("🚀 ~ (n * m):", n * m);
    }
};
newObj.functype(100, 54);
