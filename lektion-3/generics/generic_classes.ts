interface User {
    id: number;
    name: string;
    age: number;
  }

class GenericList<T> {
    private items: T[];
    private idKey: keyof T;

    constructor(idKey: keyof T) {
        this.items = [];
        this.idKey = idKey;
    }

    public add(item: T): void {
        this.items.push(item);
    }

    public remove(id: T[keyof T]): void {
        this.items = this.items.filter(item => item[this.idKey] !== id);
    }

    public getItems(): T[] {
        return this.items;
    }

    public getSize(): number {
        return this.items.length;
    }
    
}
  
const userList = new GenericList<User>("name");
userList.add({ id: 1, name: "Alice", age: 30 });
userList.add({ id: 2, name: "Bob", age: 25 });
userList.add({ id: 3, name: "Charlie", age: 40 });

console.log(userList.getItems()); // [{ id: 1, name: "Alice", age: 30 }, { id: 2, name: "Bob", age: 25 }, { id: 3, name: "Charlie", age: 40 }]
console.log(userList.getSize()); // 3

userList.remove("Bob");

console.log(userList.getItems()); // [{ id: 1, name: "Alice", age: 30 }, { id: 3, name: "Charlie", age: 40 }]
  console.log(userList.getSize()); // 2


  enum ProductCategory {
	NA,
	Food,
	Electronics
}

interface GenericProduct {
	id: number | string;
	name: string;
	category: ProductCategory
}

interface FoodProduct extends GenericProduct {
    foodType: string;
    category: ProductCategory.Food;
}

interface ElectronicProduct extends GenericProduct {
    voltage: number;
    category: ProductCategory.Electronics;
}

class GenericProductList<T extends GenericProduct> {
    private items: T[];
    private idKey: keyof T;

    constructor(idKey: keyof T) {
        this.items = [];
        this.idKey = idKey;
    }

    public add(item: T): void {
        this.items.push(item);
    }

    public remove(id: T[keyof T]): void {
        this.items = this.items.filter(item => item[this.idKey] !== id);
    }

   public filterByCategory(category: ProductCategory): T[] {
         return this.items.filter(item => item.category === category)
    }
}

const tomato: FoodProduct = {
    id: 1,
    name: "Tomato",
    category: ProductCategory.Food,
    foodType: "Fruit"
}

const tv: ElectronicProduct = {
    id: 2,
    name: "TV",
    category: ProductCategory.Electronics,
    voltage: 220
}

const productList = new GenericProductList<GenericProduct>("name");

productList.add(tomato);
productList.add(tv);

const foods = productList.filterByCategory(ProductCategory.Food);
const electronics = productList.filterByCategory(ProductCategory.Electronics);

console.log(foods); // [{ id: 1, name: "Tomato", category: ProductCategory.Food, foodType: "Fruit" }]
console.log(electronics); // [{ id: 2, name: "TV", category: ProductCategory.Electronics, voltage: 220 }]

console.log((foods as FoodProduct[])[0].foodType )