// interface Todo {
//     id: string;
//     title: string;
//     completed: boolean;
// }
// class TodosModel {
//     todos: Todo[];
//     constructor() {
//         this.todos = [];
//     }
//     addTodo(title: string) {
//         const id = Date.now().toString();
//         const todo: Todo = {
//             id,
//             title,
//             completed: false,
//         };
//         this.todos.push(todo);
//     }
//     toggleTodoCompleted(id: string) {
//         const todo = this.todos.find(todo => todo.id === id);
//         if (todo) {
//             todo.completed = !todo.completed;
//         }
//     }
// }
// class TodosIntent {
//     private model: TodosModel;
//     constructor(model: TodosModel) {
//         this.model = model;
//     }
//     getModel() {
//         return this.model;
//     }
//     addTodoTitle(title: string) {
//         this.model.addTodo(title);
//     }
//     toggleTodoCompleted(id: string) {
//         this.model.toggleTodoCompleted(id);
//     }
// }
// class TodosView {
//     private intent: TodosIntent;
//     constructor(intent: TodosIntent) {
//         this.intent = intent;
//     }
//     display() {
//         console.log('Todos:');
//         this.intent.getModel().todos.forEach(todo => {
//             console.log(`${todo.completed ? '✅' : '❌'} ${todo.title}`);
//         });
//     }
// }
// const model = new TodosModel();
// const intent = new TodosIntent(model);
// const view = new TodosView(intent);
// view.display();
// intent.addTodoTitle('Buy milk');
// intent.addTodoTitle('Do laundry');
// intent.toggleTodoCompleted(model.todos[0].id);
// view.display();
