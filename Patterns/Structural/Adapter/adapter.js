class ForeignSocket {
    constructor(voltage, form) {
        this.voltage = voltage;
        this.form = form;
    }
    isConectable(outlet) {
        return this.voltage === outlet.getVoltage() && this.form === outlet.getForm();
    }
    ;
}
class ForeignOutlet {
    constructor(voltage, form) {
        this.voltage = voltage;
        this.form = form;
    }
    getVoltage() {
        return this.voltage;
    }
    getForm() {
        return this.form;
    }
}
class MyOutlet {
    constructor(voltage, form) {
        this.voltage = voltage;
        this.form = form;
    }
    getMyVoltage() {
        return this.voltage;
    }
    getMyForm() {
        return this.form;
    }
}
class MyOutletAdapter extends ForeignOutlet {
    constructor(voltage, form, outlet) {
        super(voltage, form);
        this.outlet = outlet;
    }
    getVoltage() {
        if (this.outlet.getMyVoltage() === 220) {
            return 120;
        }
        else {
            return 220;
        }
        ;
    }
    getForm() {
        if (this.outlet.getMyForm() === "two pins") {
            return "three pins";
        }
        else {
            return "two pins";
        }
        ;
    }
}
let USSocket = new ForeignSocket(120, "three pins");
let USOutlet = new ForeignOutlet(120, "three pins");
console.log(USSocket.isConectable(USOutlet));
let UAOutlet = new MyOutlet(220, "two pins");
// USSocket.isConectable(UAOutlet);
let UaToUsOutletAdapter = new MyOutletAdapter(0, "", UAOutlet);
console.log(USSocket.isConectable(UaToUsOutletAdapter));
