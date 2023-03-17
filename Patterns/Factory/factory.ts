// interface Racer {
//     racing(): void;
// }

// class ToyotaTeam implements Racer {
//     racing(): void {
//         console.log("Team Toyota has a new racer!")
//     }
// }
// class FordTeam implements Racer {
//     racing(): void {
//         console.log("Team Ford has a new racer!")
//     }
// }


// interface RacerFactory {
//     createRacer(): Racer;
// }

// class ToyotaTeamFactory implements RacerFactory {
//     createRacer(): Racer {
//         return new ToyotaTeam();
//     };
// }

// class FordTeamFactory implements RacerFactory {
//     createRacer(): Racer {
//         return new FordTeam();
//     };
// }



// function createRacerByTeam(team: string): RacerFactory {
//     if (team === "Toyota") {
//         return new ToyotaTeamFactory();
//     } else if (team === "Ford") {
//         return new FordTeamFactory();
//     } else {
//         console.log(`${team} is unknown team`)
//     }
// }



// // let racer: Racer = new FordTeam();

// let racerFactory: RacerFactory = createRacerByTeam("Toyota");
// let racer: Racer = racerFactory.createRacer();

// racer.racing();