function updateTamagochi(tamagochi) {
  tamagochi.food -= 5;
  tamagochi.fun -= 5;
  tamagochi.sleep -= 5;

  // prevents status to be negative
  if (tamagochi.food <= 0) {
    tamagochi.food = 0;
  }
  if (tamagochi.fun <= 0) {
    tamagochi.fun = 0;
  }
  if (tamagochi.sleep <= 0) {
    tamagochi.sleep = 0;
  }

  // update status
  if (tamagochi.food <= 10) {
    tamagochi.status = 1;
  } else if (tamagochi.fun <= 10) {
    tamagochi.status = 2;
  } else if (tamagochi.sleep <= 10) {
    tamagochi.status = 3;
  } else {
    tamagochi.status = 0;
  }
}

export default updateTamagochi;
