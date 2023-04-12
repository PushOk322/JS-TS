class Box {
    setParent(parent) {
        this.parent = parent;
    }
    getParent() {
        return this.parent;
    }
    add(box) { }
    remove(box) { }
    isComposite() {
        return false;
    }
}
class Tool extends Box {
    constructor() {
        super(...arguments);
        this.price = 20;
    }
    operation() {
        return this.price;
    }
}
class Composite extends Box {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    add(box) {
        this.children.push(box);
        box.setParent(this);
    }
    remove(box) {
        const boxIndex = this.children.indexOf(box);
        this.children.splice(boxIndex, 1);
        box.setParent(null);
    }
    isComposite() {
        return true;
    }
    operation() {
        let result = 0;
        for (const child of this.children) {
            result += child.operation();
        }
        return result;
    }
}
function clientCode(box) {
    console.log(box.operation());
}
const simple = new Tool();
console.log('Price of one tool is');
clientCode(simple);
console.log('');
const garage = new Composite();
const box1 = new Composite();
box1.add(new Tool());
box1.add(new Tool());
const box2 = new Composite();
box2.add(new Tool());
garage.add(box1);
garage.add(box2);
console.log('Whole garage price is');
clientCode(garage);
