class Human {
    constructor(height, age) {
        this.height = height;
        this.age = age;
    }
}
class Student extends Human {
    constructor(height, age, name, degree) {
        super(height, age);
        this.name = name;
        this.degree = degree;
    }
}
let Ivan = new Student(180, 18, "Ivan", "mid");
console.log(Ivan);
