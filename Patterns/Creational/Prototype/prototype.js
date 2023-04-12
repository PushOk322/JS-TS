// interface Prototype {
//     clone(): Prototype;
// }
// class Phone implements Prototype {
//     constructor(public brand: string, public model: string) { }
//     clone(): Prototype {
//         return new Phone(this.brand, this.model);
//     }
// }
// class Laptop implements Prototype {
//     constructor(public brand: string, public model: string) { }
//     clone(): Prototype {
//         return new Laptop(this.brand, this.model);
//     }
// }
// class Client {
//     private prototype: Prototype;
//     constructor(prototype: Prototype) {
//         this.prototype = prototype;
//     }
//     operation() {
//         return this.prototype.clone();
//     }
// }
// const phonePrototype = new Phone('Apple', 'iPhone 14');
// const laptopPrototype = new Laptop('Dell', 'XPS 13');
// const client1 = new Client(phonePrototype);
// const client2 = new Client(laptopPrototype);
// console.log(client1.operation());
// console.log(client2.operation());
