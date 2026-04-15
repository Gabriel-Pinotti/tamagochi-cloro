const normal = "./images/sprites/normal.png";
const hungry = "./images/sprites/hungry.png";
const bored = "./images/sprites/bored.png";
const sleepy = "./images/sprites/sleepy.png";

const status = [normal, hungry, bored, sleepy];

function updateSprite(ui, status_id) {
  ui.sprite.src = status[status_id];
}

export { updateSprite };
