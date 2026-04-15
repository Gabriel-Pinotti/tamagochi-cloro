class Tamagochi {
  constructor(name) {
    this.name = name;
    this.food = 20;
    this.fun = 20;
    this.sleep = 20;
    this.status = 0;
  }

  addFood() {
    this.food += 10;
    if (this.food > 100) {
      this.food = 100;
    }
  }

  addFun() {
    this.fun += 10;
    if (this.fun > 100) {
      this.fun = 100;
    }
  }

  addSleep() {
    this.sleep += 10;
    if (this.sleep > 100) {
      this.sleep = 100;
    }
  }
}

export default Tamagochi;
