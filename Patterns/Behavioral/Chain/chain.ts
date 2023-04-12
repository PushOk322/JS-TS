abstract class Notifier {
    private priority: number;
    private nextNotifier: Notifier;
    constructor(priority: number) {
        this.priority = priority;
    }

    setNextNotifier(nextNotifier: Notifier): void {
        this.nextNotifier = nextNotifier;
    }

    notifyMember(message: string, level: number) {
        if (level >= this.priority) {
            this.write(message);
        }
        if (this.nextNotifier != null) {
            this.nextNotifier.notifyMember(message, level);
        }
    }

    abstract write(message: string): void;
}

class Priority {
    ROUTINE: number = 1;
    IMPORTANT: number = 2;
    ASAP: number = 3;
}

class SimpleReportNotifier extends Notifier {
    constructor(priority: number) {
        super(priority);
    }

    write(message: string): void {
        console.log("This message is sent to ASSISTANT: \n" + message);
    }
}
class ImportantReportNotifier extends Notifier {
    constructor(priority: number) {
        super(priority);
    }

    write(message: string): void {
        console.log("This message is sent to MAIN ASSISTANT: \n" + message);
    }
}
class AsapReportNotifier extends Notifier {
    constructor(priority: number) {
        super(priority);
    }

    write(message: string): void {
        console.log("This message is sent to TEAMLEAD to be handled as soon as possible: \n" + message);
    }
}


let priorityDocs: Priority = new Priority();

let basicReport: Notifier = new SimpleReportNotifier(priorityDocs.ROUTINE);
let importantReport: Notifier = new ImportantReportNotifier(priorityDocs.IMPORTANT);
let asapReport: Notifier = new AsapReportNotifier(priorityDocs.ASAP);

basicReport.setNextNotifier(importantReport);
importantReport.setNextNotifier(asapReport);

basicReport.notifyMember("Everything goes normally.", priorityDocs.ROUTINE);
console.log('');
basicReport.notifyMember("We have a problem with our bolid! We should use pitstop!", priorityDocs.IMPORTANT);
console.log('');
basicReport.notifyMember("EMERGENCY!!! Our pilot crashed, we must send a team to get him out!!!", priorityDocs.ASAP);