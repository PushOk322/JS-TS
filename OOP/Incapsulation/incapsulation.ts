class Person{
    constructor(name: string, haircut: string) {
        this.name = name;
        this.haircut = haircut;
    }
    public name: string;
    public haircut: string;

    private _heartrate: number;
    private _metabolism: number;

    public get heartrate(): number{
        return this._heartrate;
    }

    public set heartrate(heartrate: number) {
        if (heartrate <= 0) {
            console.log("Artem is dead");
        } else {
            this._heartrate = heartrate;
        }
    }

    public get metabolism(): number {
        return this._metabolism;
    }

    public set metabolism(metabolism: number) {
        this._metabolism = metabolism;
    }
}

let Artem: Person = new Person("Artem", "short");

// Artem._heartrate = 0;
Artem.heartrate = 120;

console.log(Artem.heartrate);