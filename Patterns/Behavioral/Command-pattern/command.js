class Team {
    add() {
        console.log("Adding new member...");
    }
    ;
    remove() {
        console.log("Removing old member...");
    }
    ;
    upgrade() {
        console.log("Upgrading member...");
    }
    ;
}
class AddCommand {
    constructor(team) {
        this.team = team;
    }
    execute() {
        this.team.add();
    }
}
class RemoveCommand {
    constructor(team) {
        this.team = team;
    }
    execute() {
        this.team.remove();
    }
}
class UpgradeCommand {
    constructor(team) {
        this.team = team;
    }
    execute() {
        this.team.upgrade();
    }
}
class HR {
    constructor(add, remove, upgrade) {
        this.add = add;
        this.remove = remove;
        this.upgrade = upgrade;
    }
    addMember() {
        console.log("HR:");
        this.add.execute();
    }
    removeMember() {
        console.log("HR:");
        this.remove.execute();
    }
    upgradeMember() {
        console.log("HR:");
        this.upgrade.execute();
    }
}
class HRHelper {
    constructor(add) {
        this.add = add;
    }
    addMember() {
        console.log("HR-Assistant:");
        this.add.execute();
    }
}
let team = new Team();
const hr = new HR(new AddCommand(team), new RemoveCommand(team), new UpgradeCommand(team));
hr.addMember();
hr.removeMember();
hr.upgradeMember();
console.log('');
const hrHelper = new HRHelper(new AddCommand(team));
hrHelper.addMember();
