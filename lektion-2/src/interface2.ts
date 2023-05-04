

// interface Person {
//     firstName: string;
//     lastName: string;
//     phoneNumber: string;
//     call: (phoneNumber: string) => void;
// }

// interface Employee extends Person {
//     jobTitle: string;
//     salary: number;
//     accessLevel: number;
// }

// interface Product {
//     EAN: number;
//     name: string;
//     description: string;
//     count: number;
//     price: number;
//     discount?: number;
// }

// interface Store {
//     id: number;
//     employees: Employee[];
//     products: Product[];
//     corporateNumber?: string;
//     isAccessGranted: (requestLevel: number, accessLevel?: number) => boolean;
// }

// const customer: Person = {
//     firstName: "John",
//     lastName: "Doe",
//     phoneNumber: "0701234567",
//     call(phoneNumber: string) {
//         console.log(`Calling ${phoneNumber}...`);
//     }
// };

// const employee: Employee = {
//     firstName: "Jane",
//     lastName: "Doe",
//     phoneNumber: "0701234567",
//     call(phoneNumber: string) {
//         console.log(`Calling ${phoneNumber}...`);
//     },
//     jobTitle: "Store Manager",
//     salary: 100000,
//     accessLevel: 3,
// };

// const store: Store = {
//     id: 1,
//     employees: [employee],
//     products: [{
//         EAN: 123456789,
//         name: "Milk",
//         description: "A glass of milk",
//         count: 10,
//         price: 10,
//     },{
//         EAN: 987654321,
//         name: "Bread",
//         description: "A loaf of bread",
//         count: 0,
//         price: 20,
//     }],
//     isAccessGranted(requestLevel: number, accessLevel?: number) {
//         if (accessLevel) {
//             return requestLevel <= accessLevel;
//         }
//         return false;
//     }
// }

// console.log(
//     `Customer: tries to access store ${store.id}...`,
//     store.isAccessGranted(1)
// )

// console.log(
//     `Employee: tries to access store ${store.id}...`,
//     store.isAccessGranted(1, employee.accessLevel)
// )

// console.log(
//     `Customer checks stock of bread...`,
//     store.products.find(product => product.EAN === 987654321)
// )

// console.log(
//     `Employee calls customer beqause bread has arrived...`,
    
// )
// customer.call(employee.phoneNumber)

