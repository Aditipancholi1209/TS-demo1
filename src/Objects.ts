type Details = {
    firstname: String,
    lastName: String,
    Age: Number
    gender?: boolean    //optional keyword

}
const Details: Object = {
    firstname: "Aditi",
    lastName: "Pancholi",
    Age: 23
}

const Details2: Details = {
    firstname: "Aditi",
    lastName: "Pancholi",
    Age: 23
}

// interface can be extended but type is not extended
// interface is like a class
//newObject
// |
interface DetailsObject extends Details {
    idNumber: number,
    functype: (m: number, n: number) => void
}

const newObj: DetailsObject = {
    firstname: '',
    lastName: '',
    Age: 34,
    idNumber: 52380,
    functype: (n, m) => {
        console.log("🚀 ~ (n * m):", n * m)

    }
}
newObj.functype(100, 54)