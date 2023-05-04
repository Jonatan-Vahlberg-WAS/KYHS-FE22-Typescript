"use strict";
const customer = {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "0701234567",
    call(phoneNumber) {
        console.log(`Calling ${phoneNumber}...`);
    }
};
const employee = {
    firstName: "Jane",
    lastName: "Doe",
    phoneNumber: "0701234567",
    call(phoneNumber) {
        console.log(`Calling ${phoneNumber}...`);
    },
    jobTitle: "Store Manager",
    salary: 100000,
    accessLevel: 3,
};
const store = {
    id: 1,
    employees: [employee],
    products: [{
            EAN: 123456789,
            name: "Milk",
            description: "A glass of milk",
            count: 10,
            price: 10,
        }, {
            EAN: 987654321,
            name: "Bread",
            description: "A loaf of bread",
            count: 0,
            price: 20,
        }],
    isAccessGranted(requestLevel, accessLevel) {
        if (accessLevel) {
            return requestLevel <= accessLevel;
        }
        return false;
    }
};
console.log(`Customer: tries to access store ${store.id}...`, store.isAccessGranted(1));
console.log(`Employee: tries to access store ${store.id}...`, store.isAccessGranted(1, employee.accessLevel));
console.log(`Customer checks stock of bread...`, store.products.find(product => product.EAN === 987654321));
console.log(`Employee calls customer beqause bread has arrived...`);
customer.call(employee.phoneNumber);
