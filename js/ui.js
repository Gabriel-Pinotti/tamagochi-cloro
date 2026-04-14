import { createUIEvents } from "./ui_events.js";

class UI {
  constructor() {
    // mapping stats
    this.name = document.getElementById("name");
    this.food = document.getElementById("food");
    this.fun = document.getElementById("fun");
    this.sleep = document.getElementById("sleep");

    // mapping actions
    this.feed = document.getElementById("feed");
    this.play = document.getElementById("play");
    this.nap = document.getElementById("nap");
  }

  update(tamagochi) {
    // update UI stats
    this.name.innerText = tamagochi.name;
    this.food.innerText = tamagochi.food;
    this.fun.innerText = tamagochi.fun;
    this.sleep.innerText = tamagochi.sleep;

    console.log("Updated sucessfuly!");
  }

  bindEvents(tamagochi) {
    // creating UI events
    createUIEvents(this, tamagochi);
    console.log("Events created!");
  }
}

export default UI;
