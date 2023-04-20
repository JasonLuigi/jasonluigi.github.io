const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/skyrim-logo.png") {
    myImage.setAttribute("src", "images/skyrim-logo2.png");
  } else {
    myImage.setAttribute("src", "images/skyrim-logo.png");
  }
};

