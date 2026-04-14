import Tamagochi from "./js/tamagochi.js";
import UI from "./js/ui.js";
import sleep from "./js/sleep.js";

const tamagochi = new Tamagochi("Mimi");
const ui = new UI();

ui.bindEvents(tamagochi);
ui.update(tamagochi);

while (true) {
  sleep(10000);
  tamagochi.update();
  ui.update(tamagochi);
}
