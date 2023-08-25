var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _products = [];
var form = document.getElementById("product-form");
function addProduct(name, price) {
    var foundProductIndex = _products.findIndex(function (p) { return p.name === name; });
    if (foundProductIndex !== -1) {
        _products[foundProductIndex] = __assign(__assign({}, _products[foundProductIndex]), { quantity: _products[foundProductIndex].quantity + 1 });
        return;
    }
    _products.push({
        name: name,
        price: price,
        quantity: 1
    });
}
/*
2. Create a function that takes in an array of product objects and returns the total cost of all _products.
*/
function getProductTotal() {
    // 1 foreach
    var total = 0;
    _products.forEach(function (p) {
        total += (p.price * p.quantity);
    });
    return total;
    // 2 map, reduce
    return _products.map(function (p) { return p.price * p.quantity; }).reduce(function (acc, current) { return acc + current; });
}
//3 Create a function that takes in a product object and updates its quantity in storage.
function updateProductQuantity(product, quantity) {
    product.quantity = quantity;
    return product;
}
//! Optional
//1 Create a function that takes in an array of product objects and a 
//  discount percentage, and returns the total cost of all products after discount.
//Refactored version: Create a function that takes in a total and a 
//discount percentage, and returns the total cost of all products after discount.
function getDiscountedTotal(total, discount) {
    var totalDiscount = total * discount;
    return total - totalDiscount;
}
//2. Create a function that takes in an array of product objects 
//and a tax rate, and returns the total cost of all products after tax.
function getTaxedTotal(total, taxrate) {
    var taxOfTotal = total * taxrate;
    return total + taxOfTotal;
}
//3. Create a function that takes in an array of product objects and a 
//filter function, and returns an array of products that pass the filter function.
var filterOnEmpty = function (product) {
    return product.quantity > 0;
};
var filterOnName = function (product, name) {
    return product.name.toLowerCase().includes(name);
};
function filterProducts(filter) {
    return _products.filter(filter);
}
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    event.stopPropagation();
    event.preventDefault();
    var _form = event.target;
    var _fields = _form.elements;
    var nameInput = _fields.namedItem("name");
    var priceInput = _fields.namedItem("price");
    console.log(nameInput, priceInput);
    addProduct(nameInput.value, parseInt(priceInput.value));
    console.log("Products: ", _products);
    _form.reset();
    var main = document.getElementById("product-main");
    var totalPriceTag = document.createElement("h3");
    totalPriceTag.innerText = "".concat(getProductTotal(), "kr");
    main === null || main === void 0 ? void 0 : main.appendChild(totalPriceTag);
});
