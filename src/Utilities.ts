// Partial  <Type>
type User = {
    email: string
    name: string
}

const User2: Partial<User> = {
    email: 'aditi@indianic.com',
    name: 'aditi'
}
// Required
const User: Required<User> = {
    email: 'aditi@indianic.com',
    name: 'aditi'
}

const user: User = {
    email: 'aditi@indianic.com',
    name: 'aditi'
}
// Readonly - makes every property readOnly

type User2 = {
    readonly email: string
    readonly name: string
}
type User2RO = {
    readonly email: string
    readonly name: string
}
User2.name = "Adi"

const user2: Readonly<User2> = {
    name: "Aditi",
    email: "aditi@indianic.com"
}

type UserName = {
    name: string;
    email: string;
}

type Userrr = Record<"name" | "email" | "gender", string>


type UserInfo = "Jin" | "RM" | "Jungkook" | "Suga" | "V" | "JHope" | "Jimin";

interface info {
    age: number,
}

const bts: Record<UserInfo, info> = {
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
bts.Jin


//  pick = which things to include in type
type OrderInfo = {
    readonly id: string
    user: string,
    city: string,
    state: string,
    country: string,
    status: string
}
type shippingInfo = Pick<OrderInfo, "city" | "state" | "country">

// omit = opposite of pick
//  which things to ommit 
// Omit<type,keys>
type shippingInfoO = Omit<OrderInfo, "country" | "status">


//  exclude & omit are similar
// Exclude <Type,ExcludedUnion>
type MyUnion = string | number | boolean
type Random = Exclude<MyUnion, boolean>      // which type to exclude

// Extract 
type MyUnion1 = string | number | boolean   // which type to extract from the above
type Random1 = Extract<MyUnion, boolean>    //extract only one type of var.

//  NonNullable

type MyUnion2 = string | number | boolean | undefined | null
type Random2 = NonNullable<MyUnion>   // it will remove null & undefined
type Random3 = Exclude<MyUnion, undefined | null>
//  both will give same result

// Parameters<Type>
const myfunc = (a: number, b: number) => {
    console.log(a + b)
}
// will fetch parameters of any given function type
type Ranndom = Parameters<typeof myfunc>

// ConstructorParameters<Type>
class SampleClass {
    constructor(public s: string, public t: string) { }
}
type Randome = ConstructorParameters<typeof SampleClass>

// ReturnType <Type>
const functionnn = (a: number, b: string): string => {
    return a + b;
}
//  it will return the type of function it's used in
//  you have to pass function type
type funccType = ReturnType<typeof functionnn>


// InstanceType <Type>
class SampleClasss {
    constructor(public s: string, public t: string) { }
}
type Randomee = InstanceType<typeof SampleClass>
//  equal to the instance of sample classs
const userrrre :Randomee={
    s:'44',
    t:'667'
}