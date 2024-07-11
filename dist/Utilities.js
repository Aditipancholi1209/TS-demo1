"use strict";
const User2 = {
    email: 'aditi@indianic.com',
    name: 'aditi'
};
// Required
const User = {
    email: 'aditi@indianic.com',
    name: 'aditi'
};
const user = {
    email: 'aditi@indianic.com',
    name: 'aditi'
};
User2.name = "Adi";
const user2 = {
    name: "Aditi",
    email: "aditi@indianic.com"
};
const bts = {
    Jin: {
        age: 31
    },
    RM: {
        age: 29
    },
    Jungkook: {
        age: 25
    },
    Suga: {
        age: 29
    },
    V: {
        age: 27
    },
    Jimin: {
        age: 27
    },
    JHope: {
        age: 29
    }
};
bts.Jin;
//  both will give same result
// Parameters<Type>
const myfunc = (a, b) => {
    console.log(a + b);
};
// ConstructorParameters<Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
// ReturnType <Type>
const functionnn = (a, b) => {
    return a + b;
};
// InstanceType <Type>
class SampleClasss {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
//  equal to the instance of sample classs
const userrrre = {
    s: '44',
    t: '667'
};
