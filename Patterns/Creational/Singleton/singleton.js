// Define a CheckIn class with a private constructor and a static method getInstance() that returns a single instance of the class.
class CheckIn {
    constructor() { }
    // The getInstance() method checks if the instance property is null, and if it is, it creates a new instance of the class.
    static getInstance() {
        if (CheckIn.instance == null) {
            CheckIn.instance = new CheckIn();
        }
        return CheckIn.instance;
    }
    // The checkIn() method logs a message to the console when called.
    checkIn(checkinMessage) {
        CheckIn.checkedInList += checkinMessage + "  ||  ";
    }
    showCheckList() {
        console.log(CheckIn.checkedInList);
    }
}
CheckIn.checkedInList = "This is check list:  ";
const instance1 = CheckIn.getInstance();
const instance2 = CheckIn.getInstance();
// Call the getInstance() method twice and store the returned instances in checkIn1 and checkIn2.
const checkInTerminal1 = instance1.checkIn("Paul is checked in");
const checkInTerminal2 = instance2.checkIn("Ostap is checked in");
if (instance1 === instance2) {
    console.log(1);
}
CheckIn.getInstance().showCheckList();
