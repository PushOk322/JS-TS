// interface Mediator{
//     sendMessageToOP(message:string): void;
//     getMessageToMem(id: string): void;
// }
// interface Member{
//     id: string;
// }
// class Operator implements Mediator{
//     private message: string;
//     sendMessageToOP(message: string): void {
//         this.message = message;
//         console.log(`Operator received your message |${this.message}|`)
//     }
//     getMessageToMem(id: string): void {
//         console.log(`Last message is: |${this.message}| and it is sent to ${id}`);
//     }
// }
// class Racer implements Member{
//     id: string = "Racer - Tony";
//     private operator: Mediator;
//     constructor(operator: Mediator) {
//         this.operator = operator;
//     }
//     getMostRecentMessage() {
//         console.log("Racer:");
//         this.operator.getMessageToMem(this.id);
//     }
//     sendRacersMessage(message: string) {
//         console.log("Racer:");
//         this.operator.sendMessageToOP(message);
//     }
// }
// class Mechanic implements Member {
//     id: string = "Mechanic - Jason";
//     private operator: Mediator;
//     constructor(operator: Mediator) {
//         this.operator = operator;
//     }
//     getMostRecentMessage() {
//         console.log("Mechanic:");
//         this.operator.getMessageToMem(this.id);
//     }
//     sendMechanicsMessage(message: string) {
//         console.log("Mechanic:");
//         this.operator.sendMessageToOP(message);
//     }
// }
// let operator = new Operator();
// let racer = new Racer(operator);
// let mechanic = new Mechanic(operator);
// racer.sendRacersMessage("Hey im racer and race goes alright");
// mechanic.getMostRecentMessage();
// mechanic.sendMechanicsMessage("HEy im mechanic and car seems alright");
// racer.getMostRecentMessage();
