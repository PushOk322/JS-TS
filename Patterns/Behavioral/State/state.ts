interface Activity {
    doSomething();
}

class Sleeping implements Activity {
    doSomething() {
        console.log("I'm sleeping...");
    }
}
class Training implements Activity {
    doSomething() {
        console.log("I'm training...");
    }
}
class Chilling implements Activity {
    doSomething() {
        console.log("I'm chilling...");
    }
}

class Sportsman {
    private activity: Activity;
    /**
     * setActivity
     */
    public setActivity(activity: Activity) {
        this.activity = activity;
    }

    /**
     * changeActivity
     */
    public changeActivity() {
        if (this.activity instanceof Sleeping) {
            this.setActivity(new Training);
        } else if (this.activity instanceof Training) {
            this.setActivity(new Chilling);
        } else if (this.activity instanceof Chilling) {
            this.setActivity(new Sleeping);
        }
    }

    /**
     * doing
     */
    public doing() {
        this.activity.doSomething();
    }
}


let man = new Sportsman();

man.setActivity(new Chilling);

for (let index = 0; index < 10; index++) {
    man.changeActivity();
    man.doing();
}