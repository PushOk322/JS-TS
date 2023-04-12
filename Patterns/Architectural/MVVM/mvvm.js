// class Product {
//     private name: string;
//     private price: number;
//     private description: string;
//     constructor(name: string, price: number, description: string) {
//         this.name = name;
//         this.price = price;
//         this.description = description;
//     }
//     public getName(): string {
//         return this.name;
//     }
//     public setName(name: string) {
//         this.name = name;
//     }
//     public getPrice(): number {
//         return this.price;
//     }
//     public setPrice(price: number) {
//         this.price = price;
//     }
//     public getDescription(): string {
//         return this.description;
//     }
//     public setDescription(description: string) {
//         this.description = description;
//     }
// }
// class ProductViewModel {
//     private products: Product[];
//     constructor(products: Product[]) {
//         this.products = products;  
//     }    
//     getProducts(): Product[] {
//         return this.products;
//     }
//     addProduct(product: Product): void {
//         this.products.push(product);
//         console.log(`Added product "${product.getName()}" with price ${product.getPrice() }$`);
//     }
//     removeProduct(product: Product): void {
//         this.products = this.products.filter(p => p !== product);
//         console.log(`Removed product "${product.getName()}"`);
//     }
// }
// class ConsoleView {
//     private viewModel: ProductViewModel;
//     constructor(viewModel: ProductViewModel) {
//         this.viewModel = viewModel;
//     }
//     displayProducts(): void {
//         console.log("Product List:");
//         this.viewModel.getProducts().forEach(p => {
//             console.log(`- ${p.getName()} (${p.getPrice()}$): ${p.getDescription()}`);
//         });
//     }
// }
// const viewModel = new ProductViewModel([
//     new Product("Product A", 10, "This is product A"),
//     new Product("Product B", 20, "This is product B"),
//     new Product("Product C", 30, "This is product C")
// ]);
// const webShop = new ConsoleView(viewModel);
// webShop.displayProducts();
// viewModel.addProduct(new Product("Product D", 40, "This is product D"));
// webShop.displayProducts();
// const productToRemove = viewModel.getProducts().find(p => p.getName() === "Product B");
// // Call the removeProduct method on the viewModel instance
// viewModel.removeProduct(productToRemove);
// webShop.displayProducts();
