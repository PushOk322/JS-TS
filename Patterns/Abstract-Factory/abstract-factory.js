class RallyRacer {
    race() {
        console.log("Rally racer is ready to compete on Rally race...");
    }
    ;
}
class RallyMechanic {
    repair() {
        console.log("Rally mechanic is ready to repair Rally car...");
    }
    ;
}
class RallyTeamLead {
    controlTeam() {
        console.log("Rally team-lead is ready to control the Rally team...");
    }
    ;
}
class RallyTeamFactory {
    getRacer() {
        return new RallyRacer;
    }
    ;
    getMechanic() {
        return new RallyMechanic;
    }
    ;
    getTeamLead() {
        return new RallyTeamLead;
    }
    ;
}
class F1Racer {
    race() {
        console.log("F1 racer is ready to compete on F1 race...");
    }
    ;
}
class F1Mechanic {
    repair() {
        console.log("F1 mechanic is ready to repair F1 car...");
    }
    ;
}
class F1TeamLead {
    controlTeam() {
        console.log("F1 team-lead is ready to control the F1 team...");
    }
    ;
}
class F1TeamFactory {
    getRacer() {
        return new F1Racer;
    }
    ;
    getMechanic() {
        return new F1Mechanic;
    }
    ;
    getTeamLead() {
        return new F1TeamLead;
    }
    ;
}
let racingCompetitionFactory = new RallyTeamFactory();
let racer = racingCompetitionFactory.getRacer();
let mechanic = racingCompetitionFactory.getMechanic();
let teamlead = racingCompetitionFactory.getTeamLead();
console.log("Race is created...");
racer.race();
mechanic.repair();
teamlead.controlTeam();
