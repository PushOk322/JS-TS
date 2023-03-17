class Human{
    constructor (height: number, age:number){
        this.height = height;
        this.age = age;
    }
    height: number;
    age: number;
}

class Student extends Human{
    constructor(height: number, age: number, name: string, degree: string) {
        super(height, age);
        this.name = name;
        this.degree = degree;
    }
    name: string;
    degree: string;
}

let Ivan: Student = new Student(180, 18,"Ivan", "mid");
console.log(Ivan);
