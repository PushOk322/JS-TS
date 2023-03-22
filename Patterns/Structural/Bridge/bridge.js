class Remote {
    constructor(device) {
        this.device = device;
    }
    openCloseWindows() {
        if (this.device.isOpened()) {
            this.device.openWindow();
        }
        else {
            this.device.closeWindow();
        }
    }
    switchMusic() {
        if (this.device.isOn()) {
            this.device.turnMusicOn();
        }
        else {
            this.device.turnMusicOff();
        }
    }
    setVolume(volume) {
        this.device.setVolume(volume);
    }
}
class AdvancedRemote extends Remote {
    mute() {
        this.device.setVolume(0);
    }
}
class Windows {
    isEnabled() {
        return;
    }
    ;
    enable() {
        return;
    }
    ;
    disable() {
        return;
    }
    ;
    isOpened() {
        return this.windows;
    }
    ;
    openWindow() {
        this.windows = true;
        console.log("Windows are opened");
    }
    ;
    closeWindow() {
        this.windows = false;
        console.log("Windows are closed");
    }
    ;
    isOn() {
        return;
    }
    ;
    turnMusicOn() {
        return;
    }
    ;
    turnMusicOff() {
        return;
    }
    ;
    setVolume(volume) {
        return;
    }
    ;
}
class Alexa {
    isEnabled() {
        return;
    }
    ;
    enable() {
        return;
    }
    ;
    disable() {
        return;
    }
    ;
    isOpened() {
        return;
    }
    ;
    openWindow() {
        return;
    }
    ;
    closeWindow() {
        return;
    }
    ;
    isOn() {
        return this.music;
    }
    ;
    turnMusicOn() {
        this.music = true;
        console.log("Music rocks!!!");
    }
    ;
    turnMusicOff() {
        this.music = false;
        console.log("Music is off(");
    }
    ;
    setVolume(volume) {
        if (volume >= 0) {
            this.volume = volume;
            console.log(`Volume is set to ${volume}`);
        }
        else {
            console.log("Cant lower volume that much)");
        }
        ;
    }
    ;
}
let viknaroff = new Windows();
let alexa = new Alexa();
let smartHome = new Remote(alexa);
smartHome.openCloseWindows();
smartHome.switchMusic();
smartHome.setVolume(100);
