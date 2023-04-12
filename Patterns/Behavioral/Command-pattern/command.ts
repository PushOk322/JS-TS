class Team {
    add(): void {
        console.log("Adding new member...");
    };
    remove(): void {
        console.log("Removing old member...");
    };
    upgrade(): void {
        console.log("Upgrading member...");
    };
}


interface Command {
    execute(): void;
}

class AddCommand implements Command {
    private team: Team;
    constructor(team: Team) {
        this.team = team;
    }
    execute(): void {
        this.team.add(); 
    }
}
class RemoveCommand implements Command {
    private team: Team;
    constructor(team: Team) {
        this.team = team;
    }
    execute(): void {
        this.team.remove();
    }
}
class UpgradeCommand implements Command {
    private team: Team;
    constructor(team: Team) {
        this.team = team;
    }
    execute(): void {
        this.team.upgrade();
    }
}

class HR {
    add: Command;
    remove: Command;
    upgrade: Command;
    constructor(add: Command, remove: Command, upgrade: Command) {
        this.add = add;
        this.remove = remove;
        this.upgrade = upgrade;
    }

    addMember(): void {
        console.log("HR:")
        this.add.execute();
    }
    removeMember(): void {
        console.log("HR:")
        this.remove.execute();
    }
    upgradeMember(): void {
        console.log("HR:")
        this.upgrade.execute();
    }
}
class HRHelper {
    add: Command;
    constructor(add: Command) {
        this.add = add;
    }

    addMember(): void {
        console.log("HR-Assistant:")
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