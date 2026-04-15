import Tamagochi from "./js/tamagochi/tamagochi.js";
import UI from "./js/ui/ui.js";
import sleep from "./js/sleep.js";
import updateTamagochi from "./js/tamagochi/updateTamagochi.js";

const tamagochi = new Tamagochi("Slimey");
const ui = new UI();

ui.bindEvents(tamagochi);
ui.update(tamagochi);

while (true) {
  await sleep(10000);
  updateTamagochi(tamagochi);
  ui.update(tamagochi);
}
