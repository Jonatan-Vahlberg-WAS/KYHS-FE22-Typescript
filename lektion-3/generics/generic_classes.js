"use strict";
class GenericList {
    constructor(idKey) {
        this.items = [];
        this.idKey = idKey;
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item[this.idKey] !== id);
    }
    getItems() {
        return this.items;
    }
    getSize() {
        return this.items.length;
    }
}
const userList = new GenericList("name");
userList.add({ id: 1, name: "Alice", age: 30 });
userList.add({ id: 2, name: "Bob", age: 25 });
userList.add({ id: 3, name: "Charlie", age: 40 });
console.log(userList.getItems()); // [{ id: 1, name: "Alice", age: 30 }, { id: 2, name: "Bob", age: 25 }, { id: 3, name: "Charlie", age: 40 }]
console.log(userList.getSize()); // 3
userList.remove("Bob");
console.log(userList.getItems()); // [{ id: 1, name: "Alice", age: 30 }, { id: 3, name: "Charlie", age: 40 }]
console.log(userList.getSize()); // 2
var ProductCategory;
(function (ProductCategory) {
    ProductCategory[ProductCategory["NA"] = 0] = "NA";
    ProductCategory[ProductCategory["Food"] = 1] = "Food";
    ProductCategory[ProductCategory["Electronics"] = 2] = "Electronics";
})(ProductCategory || (ProductCategory = {}));
class GenericProductList {
    constructor(idKey) {
        this.items = [];
        this.idKey = idKey;
    }
    add(item) {
        this.items.push(item);
    }
    remove(id) {
        this.items = this.items.filter(item => item[this.idKey] !== id);
    }
    filterByCategory(category) {
        return this.items.filter(item => item.category === category);
    }
}
const tomato = {
    id: 1,
    name: "Tomato",
    category: ProductCategory.Food,
    foodType: "Fruit"
};
const tv = {
    id: 2,
    name: "TV",
    category: ProductCategory.Electronics,
    voltage: 220
};
const productList = new GenericProductList("name");
productList.add(tomato);
productList.add(tv);
const foods = productList.filterByCategory(ProductCategory.Food);
const electronics = productList.filterByCategory(ProductCategory.Electronics);
console.log(foods); // [{ id: 1, name: "Tomato", category: ProductCategory.Food, foodType: "Fruit" }]
console.log(electronics); // [{ id: 2, name: "TV", category: ProductCategory.Electronics, voltage: 220 }]
console.log(foods[0].foodType);
