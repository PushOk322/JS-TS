class Car {
    constructor(speed) {
        this.speed = speed;
    }
    accept(visitor) {
        visitor.visitCar(this);
    }
    getSpeed() {
        return this.speed;
    }
}
class Bike {
    constructor(speed) {
        this.speed = speed;
    }
    accept(visitor) {
        visitor.visitBike(this);
    }
    getSpeed() {
        return this.speed;
    }
}
class Race {
    constructor() {
        this.winner = null;
    }
    visitCar(car) {
        if (this.winner === null || car.getSpeed() > this.winner.getSpeed()) {
            this.winner = car;
        }
    }
    visitBike(bike) {
        if (this.winner === null || bike.getSpeed() > this.winner.getSpeed()) {
            this.winner = bike;
        }
    }
    getWinner() {
        return this.winner;
    }
}
// Example usage:
const car1 = new Car(200);
const car2 = new Car(180);
const bike1 = new Bike(150);
const bike2 = new Bike(170);
const race = new Race();
car1.accept(race);
car2.accept(race);
bike1.accept(race);
bike2.accept(race);
const winner = race.getWinner();
if (winner !== null) {
    console.log(`The winner is a ${winner.constructor.name} with speed ${winner.getSpeed()}`);
}
else {
    console.log('No winner found');
}
