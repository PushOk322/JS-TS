// interface Car {
//     operation(owner: string): void;
// }
// class CarModel implements Car {
//     private model: string;
//     constructor(model: string) {
//         this.model = model;
//     }
//     operation(owner: string): void {
//         console.log(`CarModel: ${this.model} | Owner: ${owner}`);
//     }
// }
// class CarFactory {
//     private cars: { [key: string]: Car } = <any>{};
//     constructor(initialCars: { key: string; model: string }[]) {
//         for (const car of initialCars) {
//             this.cars[this.getKey(car)] = new CarModel(car.model);
//         }
//     }
//     private getKey(car: { key: string }): string {
//         return car.key;
//     }
//     getCar(sharedState: { key: string; model: string }): Car {
//         const key = this.getKey(sharedState);
//         if (!(key in this.cars)) {
//             console.log("CarFactory: Can't find a car, creating new one.");
//             this.cars[key] = new CarModel(sharedState.model);
//         } else {
//             console.log('CarFactory: Reusing existing car.');
//         }
//         return this.cars[key];
//     }
// }
// class PoliceStation {
//     addCarToPoliceDatabase(
//         ff: CarFactory, owner: string,
//         key: string, model: string
//     ) {
//         console.log('\nClient: Adding a car to database.');
//         const flyweight = ff.getCar({ key, model });
//         // The client code either stores or calculates extrinsic state and passes it
//         // to the flyweight's methods.
//         flyweight.operation(owner);
//     }
// }
// const factory = new CarFactory([
//     { key: 'Sedan', model: 'Toyota Camry' },
//     { key: 'SUV', model: 'Ford Explorer' },
// ]);
// let centralPoliceStation = new PoliceStation();
// centralPoliceStation.addCarToPoliceDatabase(factory, 'James Doe', 'Sedan', 'Toyota Camry');
// centralPoliceStation.addCarToPoliceDatabase(factory, 'Jhon Marston', 'Sedan', 'Toyota Camry');
// centralPoliceStation.addCarToPoliceDatabase(factory, 'Jason Moore', 'SUV', 'Ford Explorer');
// centralPoliceStation.addCarToPoliceDatabase(factory, 'Saul Goodman', 'Truck', 'Jeep Explorer');
