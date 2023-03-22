class Bolid {
}
class RepairKit {
}
class F1BolidBuilder {
    constructor() {
        this.bolid = new Bolid();
    }
    setMass(mass) {
        bolid.mass = mass;
    }
    ;
    setEngine(engine) {
        bolid.engine = engine;
    }
    ;
    setTyres(tyres) {
        bolid.tyres = tyres;
    }
    ;
    setHP(HP) {
        bolid.hP = HP;
    }
    ;
    setTurbo(turbo) {
        bolid.turbo = turbo;
    }
    ;
    getResult() {
        return bolid;
    }
}
class RepairKitBuilder {
    constructor() {
        this.repairKit = new RepairKit();
    }
    setMass(mass) {
        repairKit.mass = mass;
    }
    ;
    setEngine(engine) {
        repairKit.engine = "This repair kit has spare " + engine;
    }
    ;
    setTyres(tyres) {
        repairKit.tyres = "This repair kit has spare " + tyres;
    }
    ;
    setHP(HP) {
        if (HP > 300) {
            repairKit.turbo = "This repair kit can lower HP of the bolid";
        }
        else {
            repairKit.turbo = "This repair kit can boost HP of the bolid";
        }
    }
    ;
    setTurbo(turbo) {
        if (turbo === true) {
            repairKit.turbo = "This repair kit has spare turbo system";
        }
        else {
            repairKit.turbo = "This repair kit does not have spare turbo system";
        }
    }
    ;
    getResult() {
        return repairKit;
    }
}
class Director {
    create2022Bolid(builder) {
        builder.setMass(800);
        builder.setEngine("v13");
        builder.setTyres("hard tyres");
        builder.setHP(1049);
        builder.setTurbo(true);
    }
}
let director = new Director();
let F1builder = new F1BolidBuilder();
director.create2022Bolid(F1builder);
let bolid = F1builder.getResult();
let F1RepairKit = new RepairKitBuilder();
director.create2022Bolid(F1RepairKit);
let repairKit = F1RepairKit.getResult();
console.log(bolid);
console.log(repairKit);
