// class Timer {
//   start: number;
//   sec: number;

//   constructor(sec: number) {
//     this.sec   = sec;
//     this.start = sec;
//   }

//   tick() {
//     this.sec = Math.round((this.sec - 0.1) * 10) / 10;
//   }

//   get remaining() {
//     const hr  = (this.sec / (60 * 60) ) % 24;
//     const min = (this.sec / 60 ) % 24;
//     const sec = this.sec  % 60;

//     return `${this.fmt(hr)} : ${this.fmt(min)} : ${this.fmt(sec)}`;
//   }

//   get complete() {
//     return this.sec <= 0;
//   }

//   get progress() {
//     return `${(100 - Math.round((this.sec / this.start) * 100)) * 3.16}px`;
//   }

//   private fmt(num) {
//     num = parseInt(num);
//     return num < 10 ? `0${num}` : `${num}`;
//   }


// }
