type Product = {
    name: string;
    price: number;
    quantity: number;
}

//implicit

const fullName = "Jonatan Vahlberg";
const age = 26;
let timesVisitedDenmark = 4;
const isTeacher = true;

timesVisitedDenmark = 5

//Explicit 
const courseName: string = "FE22 - Typescript"
let studentIds: number[] = [0,1,2,3,4,5]

const loop = (studentId: number) => {
    console.log("Student: ", studentId)
} 

studentIds.push(7)

// :number
// :boolean

function multiply(a: number, b: number) {
    return a * b;
}
    
const multiplicand = 9;
const multiplier = 12;

console.log(multiply(multiplicand, multiplier))
const result = multiply(multiplicand, multiplier)

function calculateTotal(price: number, quantity: number, discount: number, taxRate: number) {
    let total = price * quantity;
    
    if (discount) {
      total *= (1 - discount);
    }
    
    const tax = total * taxRate;
    total += tax;
    
    return total;
}

console.log("Total:", calculateTotal(299,3,0.25,0.3) )


function generateIntroduction(name: string, age: number): string {
	return `Hello my name is ${name} and i am ${age} years old.`
}

const fnGenerateIntroduction = (name: string, age: number) => {
	return `Hello my name is ${name} and i am ${age} years old.`
}

console.log(generateIntroduction(fullName, age))
console.log(fnGenerateIntroduction(fullName, age))

function actionIsValid(action: "MOVE" | "ATTACK", attackCooldown: number): void | string {
    switch(action){
      case "ATTACK":
        if(attackCooldown !== 0){
            return "Attack is on cooldown"
        }
      }
      return
}

const useState = (initialState: string): [string,(nextState: string) => void] => {
    return [initialState,() => {}]
}

const incorrectUseState = (initialState: string) => {
    return [initialState,() => {}, initialState]
}

const [state, setter] = useState("hello")

actionIsValid("MOVE", 30)
console.log(actionIsValid("ATTACK", 1))
console.log(actionIsValid("ATTACK", 0))

const returnFromDB: any[] = []

returnFromDB.push("hello")
returnFromDB.push(0)

/*1. create a function that takes in a product 
name, price, and quantity as arguments and returns 
an object containing these values.*/

const products: {
    name: string
    price: number
    quantity: number
}[] = []

function addProduct(name: string, price: number, quantity: number): {
    name: string
    price: number
    quantity: number
} {
    return { name, price, quantity}
}

products.push(addProduct("Apple", 10, 3))
products.push(addProduct("Orange", 7, 1))
products.push(addProduct("Melon", 12, 2))
products.push(addProduct("WaterMelon", 22, 1))
products.push(addProduct("Tomato", 8, 5))
products.push(addProduct("Paprika", 8, 0))
products.push(addProduct("Lettuce", 8, 5))

products.forEach(product => console.log(`${product.name}: ${product.quantity} * ${product.price}kr`))


/* 
2. Create a function that takes in an array of product objects and returns the total cost of all products.
*/

function getProductTotal (products: {
    name: string
    price: number
    quantity: number
}[]): number {
    // 1 foreach
    let total = 0;
    products.forEach(p => {
        total += (p.price * p.quantity)
    }) 
    return total

    // 2 map, reduce
    return products.map(p => p.price * p.quantity).reduce((acc, current) => acc + current)
}

console.log("Total is: ", getProductTotal(products))

//3 Create a function that takes in a product object and updates its quantity in storage.
function updateProductQuantity(product: Product, quantity: number): Product {
    product.quantity = quantity
    return product
}

products[1] = updateProductQuantity(products[1], 10)


console.log("Total is (after quantity change): ", getProductTotal(products))


//! Optional
//1 Create a function that takes in an array of product objects and a 
//  discount percentage, and returns the total cost of all products after discount.

//Refactored version: Create a function that takes in a total and a 
//discount percentage, and returns the total cost of all products after discount.


function getDiscountedTotal(total: number, discount: number): number {

    const totalDiscount = total * discount

    return total - totalDiscount
} 

console.log("Total is (after discount): ", getDiscountedTotal(getProductTotal(products),0.10))


//2. Create a function that takes in an array of product objects 
//and a tax rate, and returns the total cost of all products after tax.

function getTaxedTotal(total: number, taxrate: number): number {
    const taxOfTotal = total * taxrate
    return total + taxOfTotal
}

console.log("Total is (after tax, and discount): ", 
    getTaxedTotal(
        getDiscountedTotal(
            getProductTotal(products),
            0.10),
        0.13
    )
)


//3. Create a function that takes in an array of product objects and a 
//filter function, and returns an array of products that pass the filter function.

const filterOnEmpty = (product: Product): boolean => {
    return product.quantity > 0
}

const filterOnName = (product: Product, name: string) => {
    return product.name.toLowerCase().includes(name)
}

function filterProducts(products: Product[], filter: (product: Product) => boolean): Product[] {
    return products.filter(filter)
}

console.log("Filtered products (non empty)", filterProducts(products, filterOnEmpty))
console.log("Filtered products (Only melons)", filterProducts(products, (product) => filterOnName(product, "melon")))

type Status = {
    statusCode: 402 | 200 | 404
    message: string
}

type Account = {
    id: number;
    balance: number;
}

function paymentStatus(totalAmount: number, paidAmount: number): Status {

    if(totalAmount < paidAmount) {
        return {
            statusCode: 402,
            message: "Payment failed. Insufficient funds"
        }
    }

    return {
        statusCode: 200,
        message: "Payment Successful"
    }
}



//404 - Account not found
const accounts: Account[] = [{
    id: 2,
    balance: 200,},
    {
        id: 18,
        balance: 50
    }
]

function validateCustomerData(accountId: number, paidAmount: number): Status {
    const foundAccountIndex = accounts.findIndex((acc) => acc.id === accountId)

    if(foundAccountIndex === -1){
        return {
            statusCode: 404,
            message: "Account not found"
        }
    }

    return paymentStatus(accounts[foundAccountIndex].balance, paidAmount)
}

console.log(validateCustomerData(2,250))
console.log(validateCustomerData(18,25))
console.log(validateCustomerData(38,100000))
