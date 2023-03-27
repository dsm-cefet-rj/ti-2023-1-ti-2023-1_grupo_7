switch (screen.orientation.type) {
    case "landscape-primary":
      console.log("That looks good.");
      break;
    case "landscape-secondary":
      console.log("Mmmh… the screen is upside down!");
      break;
    case "portrait-secondary":
    case "portrait-primary":
      console.log("Mmmh… you should rotate your device to landscape");
      break;
    default:
      console.log("The orientation API isn't supported in this browser :(");
  }