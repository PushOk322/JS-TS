// class Bolid {
//     mass: number;
//     engine: string;
//     tyres: string;
//     hP: number;
//     turbo: boolean;
// }
// class RepairKit {
//     mass: number;
//     engine: string;
//     tyres: string;
//     hP: string;
//     turbo: string;
// }
// interface bolidBuilder {
//     setMass(mass: number): void;
//     setEngine(engine: string): void;
//     setTyres(tyres: string): void;
//     setHP(HP: number): void;
//     setTurbo(turbo: boolean): void;
// }
// class F1BolidBuilder implements bolidBuilder {
//     bolid: Bolid = new Bolid();
//     setMass(mass: number): void {
//         this.bolid.mass = mass;
//     };
//     setEngine(engine: string): void {
//         this.bolid.engine = engine;
//     };
//     setTyres(tyres: string): void {
//         this.bolid.tyres = tyres;
//     };
//     setHP(HP: number): void {
//         this.bolid.hP = HP;
//     };
//     setTurbo(turbo: boolean): void {
//         this.bolid.turbo = turbo;
//     };
//     getResult(): Bolid {
//         return this.bolid;
//     }
// }
// class RepairKitBuilder implements bolidBuilder {
//     repairKit: RepairKit = new RepairKit();
//     setMass(mass: number): void {
//         this.repairKit.mass = mass;
//     };
//     setEngine(engine: string): void {
//         this.repairKit.engine = "This repair kit has spare " + engine;
//     };
//     setTyres(tyres: string): void {
//         this.repairKit.tyres = "This repair kit has spare " + tyres;
//     };
//     setHP(HP: number): void {
//         if (HP > 300) {
//             this.repairKit.turbo = "This repair kit can lower HP of the bolid";
//         } else {
//             this.repairKit.turbo = "This repair kit can boost HP of the bolid";
//         }
//     };
//     setTurbo(turbo: boolean): void {
//         if (turbo === true) {
//             this.repairKit.turbo = "This repair kit has spare turbo system";
//         } else {
//             this.repairKit.turbo = "This repair kit does not have spare turbo system";
//         }
//     };
//     getResult(): RepairKit {
//         return this.repairKit;
//     }
// }
// class Director {
//     create2022Bolid(builder: bolidBuilder) {
//         builder.setMass(800);
//         builder.setEngine("v13");
//         builder.setTyres("hard tyres");
//         builder.setHP(1049);
//         builder.setTurbo(true);
//     }
// }
// let director: Director = new Director();
// let F1builder: F1BolidBuilder = new F1BolidBuilder();
// director.create2022Bolid(F1builder);
// let bolid: Bolid = F1builder.getResult();
// let F1RepairKit: RepairKitBuilder = new RepairKitBuilder();
// director.create2022Bolid(F1RepairKit);
// let repairKit: RepairKit = F1RepairKit.getResult();
// console.log(bolid);
// console.log(repairKit);
