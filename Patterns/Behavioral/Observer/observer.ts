interface Observer {
    handleEvent(products: string[]): void
}

class Subscriber implements Observer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    handleEvent(products: string[]): void {
        console.log("Dear " + this.name + "\nOur list of available products has changed. Here are the new available products: " + products);
    }
}

interface Observed {
    addObserver(observer: Observer);
    removeObserver(observer: Observer);
    notifyObservers();
}

class PartsShop implements Observed {
    products: string[] = [];
    subscribers: Observer[] = [];

    addProduct(product: string) {
        this.products.push(product);
        this.notifyObservers();
    }
    removeProduct(product: string) {
        this.products = this.products.filter(element => element !== product);
        this.notifyObservers();
    }



    addObserver(observer: Observer) {
        this.subscribers.push(observer);
    }
    removeObserver(observer: Observer) {
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
