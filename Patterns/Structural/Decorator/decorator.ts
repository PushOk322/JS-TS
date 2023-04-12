
// interface Car {
//     drive(): string;
// }

// class RacingCar implements Car {
//     public drive(): string {
//         return 'Racing Car';
//     }
// }
// class CarDecorator implements Car {
//     protected car: Car;

//     constructor(car: Car) {
//         this.car = car;
//     }

//     public drive(): string {
//         return this.car.drive();
//     }
// }

// class NitroBoost extends CarDecorator {
//     public drive(): string {
//         return `nitro boosted ${this.car.drive()}`;
//     }
// }

// class Spoiler extends CarDecorator {
//     public drive(): string {
//         return `spoiler equipped, ${this.car.drive()}`;
//     }
// }

// function race(car: Car) {
//     console.log(`You have ${car.drive()}...`);
// }

// const racingCar = new RacingCar();
// console.log("Driver: I've got a racing car:");
// race(racingCar);
// console.log('');

// const nitroBoostedCar = new NitroBoost(racingCar);
// const spoilerEquippedCar = new Spoiler(racingCar);
// console.log("Driver: Now I've got a nitro boosted and spoiler equipped car:");
// race(spoilerEquippedCar);

