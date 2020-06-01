function throwError(message) {
  throw new Error(message);
}

export function plantGrowth(mood, sleep) {
  typeof mood === "string" || throwError("mood should be of type string");
  typeof sleep === "number" || throwError("sleep should be of type int");

  mood || throwError("mood should not be empty");
  sleep || throwError("sleep should not be empty");

  var plantLevel = 0;
  switch (mood) {
    case "happy":
      plantLevel += 4;
      break;
    case "okay":
      plantLevel += 2;
      break;
    case "angry":
      plantLevel += 1;
      break;
    case "sad":
      plantLevel += 1;
      break;
  }

  if (sleep - 4 < 0) {
    return plantLevel;
  } else if (sleep > 8) {
    plantLevel += 4 + 8 - sleep;
  } else {
    plantLevel = plantLevel + sleep - 4;
  }

  return plantLevel;
}
