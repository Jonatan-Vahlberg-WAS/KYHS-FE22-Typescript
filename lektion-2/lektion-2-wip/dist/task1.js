//?1.
var customer = {
    firstName: "Jonatan",
    lastName: "Vahlberg",
    phone: "070-1234567",
    address: "Storgatan 1"
};
var employee1 = {
    firstName: "Lars",
    lastName: "Karlsson",
    phone: "070-1234567",
    address: "Storgatan 12",
    employeeId: 1,
    jobTitle: "CEO",
    accessLevel: 3
};
// ? 2.
var product1 = {
    EAN: "123456789",
    title: "Banan",
    description: "En gul böjd frukt",
    quantity: 0,
    price: 10
};
var product2 = {
    EAN: "827328732",
    title: "Äpple",
    description: "En röd rund frukt",
    quantity: 10,
    price: 10,
    discount: 2
};
// ? 3.
var store = {
    address: "Långa gatan 1",
    id: "1882",
    corporateNumber: "556667-8899",
    employees: [employee1],
    products: [product1, product2],
    isAccessGranted: function (accessLevel) {
        return !!accessLevel;
    }
};
// ? 4.
var openStoreInventory = function (store, accessLevel) {
    var _isAccessGranted = store.isAccessGranted(accessLevel);
    if (_isAccessGranted) {
        console.log("Access granted");
        return;
    }
    console.log("Access is not granted contact employee or manager");
};
//Customer attempts to open store inventory
openStoreInventory(store, undefined);
// ? 5.
//Employee helps with opening inventory
openStoreInventory(store, store.employees[0].accessLevel);
// ? 6.
var checkInvetory = function (store, EAN) {
    var product = store.products.find(function (product) { return product.EAN === EAN; });
    if (!product) {
        console.log("Product: ".concat(EAN, " could not be found"));
        return;
    }
    if (product && !product.quantity) {
        console.log("Product: ".concat(product.title, " is not available due to shortage"));
        return;
    }
    console.log("Product: ".concat(product.title, " is available ").concat(product.quantity, " left in stock"));
};
checkInvetory(store, "123456789");
checkInvetory(store, "282");
checkInvetory(store, "827328732");
