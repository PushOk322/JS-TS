class Sleeping {
    doSomething() {
        console.log("I'm sleeping...");
    }
}
class Training {
    doSomething() {
        console.log("I'm training...");
    }
}
class Chilling {
    doSomething() {
        console.log("I'm chilling...");
    }
}
class Sportsman {
    /**
     * setActivity
     */
    setActivity(activity) {
        this.activity = activity;
    }
    /**
     * changeActivity
     */
    changeActivity() {
        if (this.activity instanceof Sleeping) {
            this.setActivity(new Training);
        }
        else if (this.activity instanceof Training) {
            this.setActivity(new Chilling);
        }
        else if (this.activity instanceof Chilling) {
            this.setActivity(new Sleeping);
        }
    }
    /**
     * doing
     */
    doing() {
        this.activity.doSomething();
    }
}
let man = new Sportsman();
man.setActivity(new Chilling);
for (let index = 0; index < 10; index++) {
    man.changeActivity();
    man.doing();
}
