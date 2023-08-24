//implicit
var fullName = "Jonatan Vahlberg";
var age = 26;
var timesVisitedDenmark = 4;
var isTeacher = true;
timesVisitedDenmark = 5;
//Explicit 
var courseName = "FE22 - Typescript";
var studentIds = [0, 1, 2, 3, 4, 5];
var loop = function (studentId) {
    console.log("Student: ", studentId);
};
studentIds.push(7);
// :number
// :boolean
function multiply(a, b) {
    return a * b;
}
var multiplicand = 9;
var multiplier = 12;
console.log(multiply(multiplicand, multiplier));
var result = multiply(multiplicand, multiplier);
function calculateTotal(price, quantity, discount, taxRate) {
    var total = price * quantity;
    if (discount) {
        total *= (1 - discount);
    }
    var tax = total * taxRate;
    total += tax;
    return total;
}
console.log("Total:", calculateTotal(299, 3, 0.25, 0.3));
function generateIntroduction(name, age) {
    return "Hello my name is ".concat(name, " and i am ").concat(age, " years old.");
}
var fnGenerateIntroduction = function (name, age) {
    return "Hello my name is ".concat(name, " and i am ").concat(age, " years old.");
};
console.log(generateIntroduction(fullName, age));
console.log(fnGenerateIntroduction(fullName, age));
function actionIsValid(action, attackCooldown) {
    switch (action) {
        case "ATTACK":
            if (attackCooldown !== 0) {
                return "Attack is on cooldown";
            }
    }
    return;
}
var useState = function (initialState) {
    return [initialState, function () { }];
};
var incorrectUseState = function (initialState) {
    return [initialState, function () { }, initialState];
};
var _a = useState("hello"), state = _a[0], setter = _a[1];
actionIsValid("MOVE", 30);
console.log(actionIsValid("ATTACK", 1));
console.log(actionIsValid("ATTACK", 0));
var returnFromDB = [];
returnFromDB.push("hello");
returnFromDB.push(0);
/*1. create a function that takes in a product
name, price, and quantity as arguments and returns
an object containing these values.*/
var products = [];
function addProduct(name, price, quantity) {
    return { name: name, price: price, quantity: quantity };
}
products.push(addProduct("Apple", 10, 3));
products.push(addProduct("Orange", 7, 1));
products.push(addProduct("Melon", 12, 2));
products.push(addProduct("WaterMelon", 22, 1));
products.push(addProduct("Tomato", 8, 5));
products.push(addProduct("Paprika", 8, 0));
products.push(addProduct("Lettuce", 8, 5));
products.forEach(function (product) { return console.log("".concat(product.name, ": ").concat(product.quantity, " * ").concat(product.price, "kr")); });
/*
2. Create a function that takes in an array of product objects and returns the total cost of all products.
*/
function getProductTotal(products) {
    // 1 foreach
    var total = 0;
    products.forEach(function (p) {
        total += (p.price * p.quantity);
    });
    return total;
    // 2 map, reduce
    return products.map(function (p) { return p.price * p.quantity; }).reduce(function (acc, current) { return acc + current; });
}
console.log("Total is: ", getProductTotal(products));
//3 Create a function that takes in a product object and updates its quantity in storage.
function updateProductQuantity(product, quantity) {
    product.quantity = quantity;
    return product;
}
products[1] = updateProductQuantity(products[1], 10);
console.log("Total is (after quantity change): ", getProductTotal(products));
//! Optional
//1 Create a function that takes in an array of product objects and a 
//  discount percentage, and returns the total cost of all products after discount.
//Refactored version: Create a function that takes in a total and a 
//discount percentage, and returns the total cost of all products after discount.
function getDiscountedTotal(total, discount) {
    var totalDiscount = total * discount;
    return total - totalDiscount;
}
console.log("Total is (after discount): ", getDiscountedTotal(getProductTotal(products), 0.10));
//2. Create a function that takes in an array of product objects 
//and a tax rate, and returns the total cost of all products after tax.
function getTaxedTotal(total, taxrate) {
    var taxOfTotal = total * taxrate;
    return total + taxOfTotal;
}
console.log("Total is (after tax, and discount): ", getTaxedTotal(getDiscountedTotal(getProductTotal(products), 0.10), 0.13));
//3. Create a function that takes in an array of product objects and a 
//filter function, and returns an array of products that pass the filter function.
var filterOnEmpty = function (product) {
    return product.quantity > 0;
};
var filterOnName = function (product, name) {
    return product.name.toLowerCase().includes(name);
};
function filterProducts(products, filter) {
    return products.filter(filter);
}
console.log("Filtered products (non empty)", filterProducts(products, filterOnEmpty));
console.log("Filtered products (Only melons)", filterProducts(products, function (product) { return filterOnName(product, "melon"); }));
