const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("Clicked! " + message);
}

// comment
if (button) {
  button.addEventListener("click", clickHandler.bind(null, "You're welcome"));
}
