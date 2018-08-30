export class Timer {
  seconds: number;
  minutes: number;
  hours: number;

  constructor() {
    this.minutes = 0;
    this.seconds = 0;
    this.hours = 0;
  }

  increaseTimer() {
    this.seconds++;
    if (this.seconds === 60) {
      this.minutes++;
      this.seconds = 0;
      if (this.minutes === 60) {
        this.hours++;
        this.minutes = 0;
      }
    }

    return (this.hours < 10 ? '0' + this.hours : '' + this.hours) + ':' +
    (this.minutes < 10 ? '0' + this.minutes : '' + this.minutes) + ':' +
    (this.seconds < 10 ? '0' + this.seconds : '' + this.seconds);
  }
}

