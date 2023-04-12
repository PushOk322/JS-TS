// View
interface CalculatorView {
    displayResult(result: number): void;
}

class ConsoleCalculatorView implements CalculatorView {
    displayResult(result: number) {
        console.log(`Result: ${result}`);
    }
}

// Interactor
interface CalculatorInteractor {
    addNumbers(a: number, b: number): number;
}

class Calculator implements CalculatorInteractor {
    addNumbers(a: number, b: number): number {
        return a + b;
    }
}

// Presenter
interface CalculatorPresenter {
    addNumbers(a: number, b: number): void;
}

class CalculatorPresenterImpl implements CalculatorPresenter {
    private view: CalculatorView;
    private interactor: CalculatorInteractor;
    constructor(view: CalculatorView, interactor: CalculatorInteractor) {
        this.view = view;
        this.interactor = interactor;
    }

    addNumbers(a: number, b: number): void {
        this.view.displayResult(this.interactor.addNumbers(a, b));
    }
}

// Entity
class Numbers {
    public a: number;
    public b: number;
    constructor(a: number, b: number) { 
        this.a = a;
        this.b = b;
    }
}

// Router
class CalculatorRouter {
    private presenter: CalculatorPresenter
    constructor(presenter: CalculatorPresenter) {
        this.presenter = presenter;
    }

    start(num1: number, num2: number) {
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