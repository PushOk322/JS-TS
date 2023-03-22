class Phone {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    clone() {
        return new Phone(this.brand, this.model);
    }
}
class Laptop {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    clone() {
        return new Laptop(this.brand, this.model);
    }
}
class Client {
    constructor(prototype) {
        this.prototype = prototype;
    }
    operation() {
        return this.prototype.clone();
    }
}
const phonePrototype = new Phone('Apple', 'iPhone 14');
const laptopPrototype = new Laptop('Dell', 'XPS 13');
const client1 = new Client(phonePrototype);
const client2 = new Client(laptopPrototype);
console.log(client1.operation());
console.log(client2.operation());
