class Product {
    constructor(id, price, name, quantity=1) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.quantity = quantity;
    }
}

let products = [];
products.push(new Product(1, 102.45, "A",100));
products.push(new Product(2, 2.15, "B",0));
products.push(new Product(3, 75.16, "C",500));
products.push(new Product(4, 37.83, "D", 200));
let total = products.map( product => product.price * product.quantity)
    .reduce( (sum,u) => sum + u, 0);
console.log(total);
let emptyStock = products.filter( product => product.quantity == 0);
console.log(emptyStock);
