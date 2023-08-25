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
function paymentStatus(totalAmount, paidAmount) {
    if (totalAmount < paidAmount) {
        return {
            statusCode: 402,
            message: "Payment failed. Insufficient funds"
        };
    }
    return {
        statusCode: 200,
        message: "Payment Successful"
    };
}
//404 - Account not found
var accounts = [{
        id: 2,
        balance: 200,
    },
    {
        id: 18,
        balance: 50
    }
];
function validateCustomerData(accountId, paidAmount) {
    var foundAccountIndex = accounts.findIndex(function (acc) { return acc.id === accountId; });
    if (foundAccountIndex === -1) {
        return {
            statusCode: 404,
            message: "Account not found"
        };
    }
    return paymentStatus(accounts[foundAccountIndex].balance, paidAmount);
}
console.log(validateCustomerData(2, 250));
console.log(validateCustomerData(18, 25));
console.log(validateCustomerData(38, 100000));
