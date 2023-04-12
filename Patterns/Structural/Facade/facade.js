// class Race{
//     raceInProgress() {
//         console.log("Race in progress");
//     }
// }
// class RaceTracker{
//     private activeRace:boolean;
//     startRace() {
//         this.activeRace = true;
//         console.log("Race has started");
//     }
//     finishRace() {
//         this.activeRace = false;
//         console.log("Race has finished");
//     }
//     isRaceActive() {
//         return this.activeRace
//     }
// }
// class Racer{
//     racing(RaceTracker: RaceTracker) {
//         if (RaceTracker.isRaceActive() === true) {
//             console.log("Racer started competing in the race");
//         } else {
//             console.log("Race ended, racers stopped")
//         }
//     }
// }
// class RaceHeadMan{
//     private race: Race = new Race();
//     private raceTracker: RaceTracker = new RaceTracker();
//     private racer: Racer = new Racer();
//     startTimer() {
//         this.raceTracker.startRace();
//         this.race.raceInProgress();        
//         this.racer.racing(this.raceTracker);
//     }
//     stopTimer() {
//         this.raceTracker.finishRace();
//         this.racer.racing(this.raceTracker);
//     }
// }
// let director: RaceHeadMan = new RaceHeadMan();
// director.startTimer();
// director.stopTimer();
