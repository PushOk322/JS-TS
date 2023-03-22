class ToyotaTeam {
    racing() {
        console.log("Team Toyota has a new racer!");
    }
}
class FordTeam {
    racing() {
        console.log("Team Ford has a new racer!");
    }
}
class ToyotaTeamFactory {
    createRacer() {
        return new ToyotaTeam();
    };
}
class FordTeamFactory {
    createRacer() {
        return new FordTeam();
    };
}
function createRacerByTeam(team) {
    if (team === "Toyota") {
        return new ToyotaTeamFactory();
    }
    else if (team === "Ford") {
        return new FordTeamFactory();
    }
    else {
        console.log(`${team} is unknown team`);
    }
}
// let racer: Racer = new FordTeam();
let racerFactory = createRacerByTeam("Toyota");
let racer = racerFactory.createRacer();
