class ForeignSocket {
    constructor(voltage: number, form: string) {
        this.voltage = voltage;
        this.form = form;
    }
    private voltage: number;
    private form: string;
    isConectable(outlet: ForeignOutlet) {
        return this.voltage === outlet.getVoltage() && this.form === outlet.getForm();
    };
}

class ForeignOutlet {
    constructor(voltage: number, form: string) {
        this.voltage = voltage;
        this.form = form;
    }
    private voltage: number;
    private form: string;

    getVoltage() {
        return this.voltage;
    }
    getForm() {
        return this.form;
    }
}

class MyOutlet {
    constructor(voltage: number, form: string) {
        this.voltage = voltage;
        this.form = form;
    }
    private voltage: number;
    private form: string;

    getMyVoltage() {
        return this.voltage;
    }
    getMyForm() {
        return this.form;
    }
}

class MyOutletAdapter extends ForeignOutlet {
    private outlet: MyOutlet;

    constructor(voltage: number, form: string, outlet: MyOutlet) {
        super(voltage, form);
        this.outlet = outlet;
    }
    getVoltage() {
        if (this.outlet.getMyVoltage() === 220) {
            return 120;
        } else {
            return 220;
        };
    }
    getForm() {
        if (this.outlet.getMyForm() === "two pins") {
            return "three pins";
        } else {
            return "two pins";
        };
    }
}


let USSocket: ForeignSocket = new ForeignSocket(120, "three pins");
let USOutlet: ForeignOutlet = new ForeignOutlet(120, "three pins");

console.log(USSocket.isConectable(USOutlet));

let UAOutlet: MyOutlet = new MyOutlet(220, "two pins");

// console.log(USSocket.isConectable(UAOutlet));

let UaToUsOutletAdapter: MyOutletAdapter = new MyOutletAdapter(0, "", UAOutlet);

console.log(USSocket.isConectable(UaToUsOutletAdapter));