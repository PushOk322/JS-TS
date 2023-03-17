class Person {
    constructor(name, haircut) {
        this.name = name;
        this.haircut = haircut;
    }
    get heartrate() {
        return this._heartrate;
    }
    set heartrate(heartrate) {
        if (heartrate <= 0) {
            console.log("Artem is dead");
        }
        else {
            this._heartrate = heartrate;
        }
    }
    get metabolism() {
        return this._metabolism;
    }
    set metabolism(metabolism) {
        this._metabolism = metabolism;
    }
}
let Artem = new Person("Artem", "short");
// Artem._heartrate = 0;
Artem.heartrate = 120;
console.log(Artem.heartrate);
