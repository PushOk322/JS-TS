interface Visitor {
    visitCar(car: Car): void;
    visitBike(bike: Bike): void;
}

interface RaceVehicle {
    accept(visitor: Visitor): void;
    getSpeed(): number;
}

class Car implements RaceVehicle {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    accept(visitor: Visitor): void {
        visitor.visitCar(this);
    }

    getSpeed(): number {
        return this.speed;
    }
}

class Bike implements RaceVehicle {
    private speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    accept(visitor: Visitor): void {
        visitor.visitBike(this);
    }

    getSpeed(): number {
        return this.speed;
    }
}

class Race implements Visitor {
    private winner: RaceVehicle | null = null;

    visitCar(car: Car): void {
        if (this.winner === null || car.getSpeed() > this.winner.getSpeed()) {
            this.winner = car;
        }
    }

    visitBike(bike: Bike): void {
        if (this.winner === null || bike.getSpeed() > this.winner.getSpeed()) {
            this.winner = bike;
        }
    }

    getWinner(): RaceVehicle | null {
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
} else {
    console.log('No winner found');
}