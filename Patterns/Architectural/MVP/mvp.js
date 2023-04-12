// interface UserModel {
//     name: string;
//     age: number;
// }
// class UserDB {
//     private model: UserModel;
//     constructor(model: UserModel) {
//         this.model = model;
//     }
//     getName(): string {
//         return this.model.name;
//     }
//     setName(name: string): void {
//         this.model.name = name;
//     }
//     getAge(): number {
//         return this.model.age;
//     }
//     setAge(age: number): void {
//         this.model.age = age;
//     }
// }
// interface UserView {
//     logName(name: string): void;
//     logAge(age: number): void;
//     logInfo(name: string, age: number): void;
// }
// class ConsoleUserView implements UserView {
//     logName(name: string): void {
//         console.log("Name is changed");        
//         console.log(`Name: ${name}`);
//     }
//     logAge(age: number): void {
//         console.log("Age is changed");
//         console.log(`Age: ${age}`);
//     }
//     logInfo(name: string, age: number): void {
//         console.log(`Base name: "${name}" and base age: "${age}"`);
//     }
// }
// class UserPresenter {
//     private model: UserDB;
//     private view: UserView;
//     constructor(model: UserDB, view: UserView) {
//         this.model = model;
//         this.view = view;
//     }
//     setName(name: string): void {
//         this.model.setName(name);        
//         this.view.logName(name);
//     }
//     setAge(age: number): void {
//         this.model.setAge(age);        
//         this.view.logAge(age);
//     }
//     getInfo() {
//         this.view.logInfo(this.model.getName(), this.model.getAge());
//     }
// }
// const userModel: UserModel = { name: 'John Doe', age: 30 };
// const userDB: UserDB = new UserDB(userModel);
// const userView: UserView = new ConsoleUserView();
// const userPresenter: UserPresenter = new UserPresenter(userDB, userView);
// userPresenter.getInfo();
// console.log("");
// userPresenter.setName('Jane Doe');
// userPresenter.setAge(25);
