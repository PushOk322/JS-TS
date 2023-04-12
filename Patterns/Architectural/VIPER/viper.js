class ConsoleCalculatorView {
    displayResult(result) {
        console.log(`Result: ${result}`);
    }
}
class Calculator {
    addNumbers(a, b) {
        return a + b;
    }
}
class CalculatorPresenterImpl {
    constructor(view, interactor) {
        this.view = view;
        this.interactor = interactor;
    }
    addNumbers(a, b) {
        this.view.displayResult(this.interactor.addNumbers(a, b));
    }
}
// Entity
class Numbers {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}
// Router
class CalculatorRouter {
    constructor(presenter) {
        this.presenter = presenter;
    }
    start(num1, num2) {
        this.presenter.addNumbers(num1, num2);
    }
}
// App
const view = new ConsoleCalculatorView();
const interactor = new Calculator();
const presenter = new CalculatorPresenterImpl(view, interactor);
const router = new CalculatorRouter(presenter);
const numbers = new Numbers(1, 2);
router.start(numbers.a, numbers.b);
