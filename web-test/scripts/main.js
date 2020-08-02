let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/skull-image.jpg") {
    myImage.setAttribute("src", "images/realist-skull.jpg");
  } else {
    myImage.setAttribute("src", "images/skull-image.jpg")
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  let userName = prompt("Por favor, digite seu nome de usuário.");
  if (!userName) {
    setUserName();
  } else {
    localStorage.setItem("name", userName);
    myHeading.textContent = "Seja bem-vindo" + userName + "!";
  }
}

if(!(localStorage.getItem("name"))){
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Seja bem-vindo " + storedName + "!";
}

myButton.onclick = function () {
  setUserName();
}

