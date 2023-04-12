class Subscriber {
    constructor(name) {
        this.name = name;
    }
    handleEvent(products) {
        console.log("Dear " + this.name + "\nOur list of available products has changed. Here are the new available products: " + products);
    }
}
class PartsShop {
    constructor() {
        this.products = [];
        this.subscribers = [];
    }
    addProduct(product) {
        this.products.push(product);
        this.notifyObservers();
    }
    removeProduct(product) {
        this.products = this.products.filter(element => element !== product);
        this.notifyObservers();
    }
    addObserver(observer) {
        this.subscribers.push(observer);
    }
    removeObserver(observer) {
        this.subscribers = this.subscribers.filter(element => element !== observer);
        this.notifyObservers();
    }
    notifyObservers() {
        for (const observer of this.subscribers) {
            observer.handleEvent(this.products);
        }
    }
}
let partsShop = new PartsShop();
partsShop.addProduct("brake pad");
partsShop.addProduct("strap");
let firstSub = new Subscriber("Jason Moore");
let secondSub = new Subscriber("John Marston");
partsShop.addObserver(firstSub);
partsShop.addObserver(secondSub);
partsShop.addProduct("steering rack");
partsShop.addProduct("steering wheel");
