class ConceptCar{
    private version: string;
    private date: string;
    
    setVersionAndDate(version: string, date: string) {
        this.version = version;
        this.date = date;
    }

    save(): Save{
        console.log("Saving current progress on concept...");
        return new Save(this.version, this.date);
    }
    load(save: Save) {
        console.log("Loading previous progress on concept...");
        this.version = save.getVersion(); 
        this.date = save.getDate(); 
    }

    displayCurrentState() {
        console.log("\n___________________\n" + "Concept: \n" + "\nVersion: " + this.version + "\nDate: " + this.date + "\n___________________\n") ;
    }

}

class Save{
    private version: string;
    private date: string;

    constructor(version: string, date: string) {
        this.version = version;
        this.date = date;
    }

    public getVersion(): string    {
        return this.version;
    }

    public getDate(): string {
        return this.date;
    }
}


class Table{
    private save: Save;
    public setSave(save: Save) {
        this.save = save;
    }
    public getSave() {
        return this.save;
    }
}


console.log("Creating new BMW concept...")
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
