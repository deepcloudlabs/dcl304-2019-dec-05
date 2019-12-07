class Product {
    constructor(id, price, name, quantity=1) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.quantity = quantity;
    }
}

let streamGenerator = function* (){
    for (let i=0;i<100;++i)
        yield new Product(i,i*100,`P${i}`,i);
}
let products = streamGenerator();
let total = 0;
let product= products.next();
while(!product.done){
    total += product.value.price * product.value.quantity;
    product = products.next();
    console.log(product);
} ;
console.log(total);
