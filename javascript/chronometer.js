class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) { 
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      callback()
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return Math.floor(this.currentTime)-(60*Math.floor(this.currentTime/60))
  }
  twoDigitsNumber(myNumber) {
    return('0' + myNumber).slice(-2);
  }
  stopClick() {
    return clearInterval(this.intervalId);
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    console.log(min);
    let sec = this.twoDigitsNumber(this.getSeconds());
    return `${min}:${sec}`;
    }
}