class Notifier {
    constructor(priority) {
        this.priority = priority;
    }
    setNextNotifier(nextNotifier) {
        this.nextNotifier = nextNotifier;
    }
    notifyMember(message, level) {
        if (level >= this.priority) {
            this.write(message);
        }
        if (this.nextNotifier != null) {
            this.nextNotifier.notifyMember(message, level);
        }
    }
}
class Priority {
    constructor() {
        this.ROUTINE = 1;
        this.IMPORTANT = 2;
        this.ASAP = 3;
    }
}
class SimpleReportNotifier extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log("This message is sent to ASSISTANT: \n" + message);
    }
}
class ImportantReportNotifier extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log("This message is sent to MAIN ASSISTANT: \n" + message);
    }
}
class AsapReportNotifier extends Notifier {
    constructor(priority) {
        super(priority);
    }
    write(message) {
        console.log("This message is sent to TEAMLEAD to be handled as soon as possible: \n" + message);
    }
}
let priorityDocs = new Priority();
let basicReport = new SimpleReportNotifier(priorityDocs.ROUTINE);
let importantReport = new ImportantReportNotifier(priorityDocs.IMPORTANT);
let asapReport = new AsapReportNotifier(priorityDocs.ASAP);
basicReport.setNextNotifier(importantReport);
importantReport.setNextNotifier(asapReport);
basicReport.notifyMember("Everything goes normally.", priorityDocs.ROUTINE);
console.log('');
basicReport.notifyMember("We have a problem with our bolid! We should use pitstop!", priorityDocs.IMPORTANT);
console.log('');
basicReport.notifyMember("EMERGENCY!!! Our pilot crashed, we must send a team to get him out!!!", priorityDocs.ASAP);
