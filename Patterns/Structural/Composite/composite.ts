abstract class Box {
    protected parent!: Box | null;

    public setParent(parent: Box | null) {
        this.parent = parent;
    }
    public getParent(): Box | null {
        return this.parent;
    }


    public add(box: Box): void { }
    public remove(box: Box): void { }


    public isComposite(): boolean {
        return false;
    }

    public abstract operation(): number;
}


class Tool extends Box {
    private price: number = 20;
    public operation(): number {
        return this.price;
    }
}


class Composite extends Box {
    protected children: Box[] = [];


    public add(box: Box): void {
        this.children.push(box);
        box.setParent(this);
    }

    public remove(box: Box): void {
        const boxIndex = this.children.indexOf(box);
        this.children.splice(boxIndex, 1);

        box.setParent(null);
    }

    public isComposite(): boolean {
        return true;
    }


    public operation(): number {
        let result: number = 0;
        for (const child of this.children) {
            result += child.operation();
        }

        return result;
    }
}

function clientCode(box: Box) {

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

