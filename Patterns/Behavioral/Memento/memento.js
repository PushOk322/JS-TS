class ConceptCar {
    setVersionAndDate(version, date) {
        this.version = version;
        this.date = date;
    }
    save() {
        console.log("Saving current progress on concept...");
        return new Save(this.version, this.date);
    }
    load(save) {
        console.log("Loading previous progress on concept...");
        this.version = save.getVersion();
        this.date = save.getDate();
    }
    displayCurrentState() {
        console.log("\n___________________\n" + "Concept: \n" + "\nVersion: " + this.version + "\nDate: " + this.date + "\n___________________\n");
    }
}
class Save {
    constructor(version, date) {
        this.version = version;
        this.date = date;
    }
    getVersion() {
        return this.version;
    }
    getDate() {
        return this.date;
    }
}
class Table {
    setSave(save) {
        this.save = save;
    }
    getSave() {
        return this.save;
    }
}
console.log("Creating new BMW concept...");
let conceptBMW = new ConceptCar();
let logTable = new Table();
conceptBMW.setVersionAndDate("1.0", "25.03.2023");
conceptBMW.displayCurrentState();
logTable.setSave(conceptBMW.save());
console.log("\n!!!Adding some bad features...(");
conceptBMW.setVersionAndDate("1.1", "01.04.2023");
conceptBMW.displayCurrentState();
console.log("\n!!!Backing up to previous concept...");
conceptBMW.load(logTable.getSave());
conceptBMW.displayCurrentState();
