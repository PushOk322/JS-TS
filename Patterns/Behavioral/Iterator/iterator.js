// interface Checkpoint {
//     name: string;
// }
// interface RaceIterator {
//     nextCheckpoint(): Checkpoint;
//     hasNextCheckpoint(): boolean;
// }
// interface RaceTrack {
//     createRaceIterator(): RaceIterator;
// }
// class RaceTrackIterator implements RaceIterator {
//     private index = 0;
//     private checkpoints: Checkpoint[];
//     constructor(checkpoints: Checkpoint[]) {
//         this.checkpoints = checkpoints;
//     }
//     nextCheckpoint(): Checkpoint {
//         const checkpoint = this.checkpoints[this.index];
//         this.index++;
//         return checkpoint;
//     }
//     hasNextCheckpoint(): boolean {
//         return this.index < this.checkpoints.length;
//     }
// }
// class Race implements RaceTrack {
//     private checkpoints: Checkpoint[];
//     constructor(checkpoints: Checkpoint[]) {
//         this.checkpoints = checkpoints;
//     }
//     createRaceIterator(): RaceIterator {
//         return new RaceTrackIterator(this.checkpoints);
//     }
// }
// let race = new Race([
//     { name: 'Starting line' },
//     { name: 'Checkpoint 1' },
//     { name: 'Checkpoint 2' },
//     { name: 'Finish line' },
// ]);
// let iterator = race.createRaceIterator();
// while (iterator.hasNextCheckpoint()) {
//     const checkpoint = iterator.nextCheckpoint();
//     console.log(`Passing through ${checkpoint.name}`);
// }
