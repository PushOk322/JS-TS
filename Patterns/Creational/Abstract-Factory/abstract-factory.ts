interface Racer {
    race(): void;
}
interface Mechanic {
    repair(): void;
}
interface TeamLead {
    controlTeam(): void;
}
interface RaceTeamFactory {
    getRacer(): Racer;
    getMechanic(): Mechanic;
    getTeamLead(): TeamLead;
}


class RallyRacer implements Racer {
    race(): void {
        console.log("Rally racer is ready to compete on Rally race...");
    };
}
class RallyMechanic implements Mechanic {
    repair(): void {
        console.log("Rally mechanic is ready to repair Rally car...");
    };
}
class RallyTeamLead implements TeamLead {
    controlTeam(): void {
        console.log("Rally team-lead is ready to control the Rally team...");
    };
}
class RallyTeamFactory implements RaceTeamFactory {
    getRacer(): Racer {
        return new RallyRacer;
    };
    getMechanic(): Mechanic {
        return new RallyMechanic;
    };
    getTeamLead(): TeamLead {
        return new RallyTeamLead;
    };
}


class F1Racer implements Racer {
    race(): void {
        console.log("F1 racer is ready to compete on F1 race...");
    };
}
class F1Mechanic implements Mechanic {
    repair(): void {
        console.log("F1 mechanic is ready to repair F1 car...");
    };
}
class F1TeamLead implements TeamLead {
    controlTeam(): void {
        console.log("F1 team-lead is ready to control the F1 team...");
    };
}
class F1TeamFactory implements RaceTeamFactory {
    getRacer(): Racer {
        return new F1Racer;
    };
    getMechanic(): Mechanic {
        return new F1Mechanic;
    };
    getTeamLead(): TeamLead {
        return new F1TeamLead;
    };
}




let racingCompetitionFactory: RaceTeamFactory = new RallyTeamFactory();

let racer: Racer = racingCompetitionFactory.getRacer();
let mechanic: Mechanic = racingCompetitionFactory.getMechanic();
let teamlead: TeamLead = racingCompetitionFactory.getTeamLead();

console.log("Race is created...");
racer.race();
mechanic.repair();
teamlead.controlTeam();



