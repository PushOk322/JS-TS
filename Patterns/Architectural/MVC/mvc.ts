
// class BankBE {
//     private name: string;
//     private email: string;
//     private cardNumber: number;

//     constructor(name: string, email: string, cardNumber: number) {
//         this.name = name;
//         this.email = email;
//         this.cardNumber = cardNumber;
//     }

//     getName(): string {
//         return this.name;
//     }

//     getEmail(): string {
//         return this.email;
//     }
//     getCard(): number{
//         return this.cardNumber;
//     }

//     setName(name: string): void {
//         this.name = name;
//     }

//     setEmail(email: string): void {
//         this.email = email;
//     }

//     setCard(card: number): void {
//         this.cardNumber = card;
//     }
// }


// class BankPage {
//     displayUserDetails(name: string, email: string, card: number): void {
//         console.log(`Name: ${name}, Email: ${email}, Card-number: ${card}`);
//     }
// }


// class BankController {
//     private model: BankBE;
//     private view: BankPage;

//     constructor(model: BankBE, view: BankPage) {
//         this.model = model;
//         this.view = view;
//     }

//     updateName(name: string): void {
//         this.model.setName(name);
//     }

//     updateEmail(email: string): void {
//         this.model.setEmail(email);
//     }

//     updateCard(card: number): void{
//         this.model.setCard(card);
//     }

//     displayUserInfo(): void {
//         const name = this.model.getName();
//         const email = this.model.getEmail();
//         const card = this.model.getCard();
//         this.view.displayUserDetails(name, email, card);
//     }
// }


// const user = new BankBE("Samuel Jackson", "sam.jack@gmail.com", 3725240387095670);
// const view = new BankPage();
// const controller = new BankController(user, view);

// controller.displayUserInfo();

// controller.updateName("Jane Doe");
// controller.updateEmail("janedoe@gmail.com");
// controller.updateCard(3787440387095670);

// controller.displayUserInfo();