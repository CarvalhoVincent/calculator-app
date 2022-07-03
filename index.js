let toggleSwitch = document.getElementsByClassName("redButton")[0];
const outerContainer = document.getElementById("outerContainer");
const buttonContainer = document.getElementById("buttonContainer");
const legendContainer = document.getElementById("legendTextContainer");
const toggleButton = document.getElementById("toggleButton");
const body = document.getElementById("body");
let textColor = document.getElementsByClassName("textColor");
let keyButtons = document.getElementsByClassName("keyButtons");
let keyReset = document.getElementsByClassName("keyRESET");
let keyEqual = document.getElementsByClassName("keyEqual")[0];
const screenBg = document.getElementById("screen-bg");
const keysBg = document.getElementById("keysBg");
const themeRadioBtns = document.querySelectorAll(".theme-radio");

//-------------------//
//      Themes       //
//-------------------//




var theme8;


theme8 = {
    body: "hsl-bg-toggle-black",
    bgKeys: 5,
    type: "Gas Giant",
    radius: 69911,
    sizeRank: 1
};

function getThemeInfo (theme) {
    return theme.body + theme.bgKeys;
};

console.log(getThemeInfo(theme8));









var theme1;

theme1 = {
    body: "hsl( var(--clr-toggle-bg-violet))",
    keysBg: "hsl( var(--clr-toggle-bg-violet))",
    
  };
  
 
  const theme2 = {
    body: "hsl( var(--clr-toggle-bg-violet))",
    keysBg: "hsl( var(--clr-main-bg-blue))",
 
  };
  
  const theme3 = {
    body: "hsl( var(--clr-toggle-bg-violet))",
    keysBg: "hsl( var(--clr-text-grayishBlue))",

  };


// the change event fires when you select a radio button
// make sure the change the theme_1, theme_2, theme_3 to changeTheme
// when you refactor the code

themeRadioBtns.forEach((button) => {
    if (button.value == "1") button.addEventListener("change", changeTheme);
    if (button.value == "2") button.addEventListener("change", changeTheme);
    if (button.value == "3") button.addEventListener("change", changeTheme);
  });

// you can declare your 3 themes as an object like this
// then you can say theme1.screenBg to access the variables




// try to simplify these theme toggle functions into 1 function that takes a theme as an arguement
// you can declare the color names as objects above
function changeTheme(theme) {
    

  // you can put the theme object you declared up top and then use the variables
  // to change your theme for example
    return body.style.backgroundColor = theme.body,
    keysBg.style.backgroundColor = theme.keysBg;

 


  // put the other things you want to change here
}

function theme_1() {
  console.log("clicked");
  //   toggleSwitch.classList.add("horizTranslate1");
  //   toggleSwitch.classList.remove("horizTranslate2");
  //   toggleSwitch.classList.remove("horizTranslate3");
  //   toggleSwitch.classList.add("hoverClass1");
  //   toggleSwitch.classList.remove("hoverClass2");
  //   toggleSwitch.classList.remove("hoverClass3");
  body.style.backgroundColor = "hsl( var(--clr-main-bg-blue))";
  //   outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-blue))";
  //   buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-blue))";
  //   legendContainer.style.color = "hsl( var(--clr-text-white))";
  //   toggleButton.style.backgroundColor = "hsl( var(--clr-key-red-bg))";

  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = "hsl( var(--clr-text-white))";
  }

  for (var i = 0; i < keyButtons.length; i++) {
    keyButtons[i].style.color = "hsl( var(--clr-text-grayishBlue))";
    keyButtons[i].classList.add("hoverKeys1");
    keyButtons[i].classList.remove("hoverKeys2");
    keyButtons[i].classList.remove("hoverKeys3");
  }

  for (var i = 0; i < keyReset.length; i++) {
    keyReset[i].classList.add("reset1");
    keyReset[i].classList.remove("reset2");
    keyReset[i].classList.remove("reset3");
  }

  keyEqual.classList.add("equal1");
  keyEqual.classList.remove("equal2");
  keyEqual.classList.remove("equal3");
  screenBg.style.backgroundColor = "hsl( var(--clr-screen-bg-blue))";
  keysBg.style.backgroundColor = "hsl( var(--clr-screen-bg-blue))";
}

function theme_2() {
  //   toggleSwitch.classList.add("horizTranslate2");
  //   toggleSwitch.classList.remove("horizTranslate3");
  //   toggleSwitch.classList.remove("horizTranslate1");
  //   toggleSwitch.classList.add("hoverClass2");
  //   toggleSwitch.classList.remove("hoverClass1");
  //   toggleSwitch.classList.remove("hoverClass3");
  body.style.backgroundColor = "hsl( var(--clr-main-bg-gray))";
  //   outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-gray))";
  //   buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-red))";
  //   legendContainer.style.color = "hsl( var(--clr-text-grayishYellow))";
  //   toggleButton.style.backgroundColor = "hsl( var(--clr-key-redish-bg))";

  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = "hsl( var(--clr-text-grayishYellow))";
  }

  for (var i = 0; i < keyButtons.length; i++) {
    keyButtons[i].classList.add("hoverKeys2");
    keyButtons[i].classList.remove("hoverKeys1");
    keyButtons[i].classList.remove("hoverKeys3");
  }

  for (var i = 0; i < keyReset.length; i++) {
    keyReset[i].classList.add("reset2");
    keyReset[i].classList.remove("reset1");
    keyReset[i].classList.remove("reset3");
  }

  keyEqual.classList.add("equal2");
  keyEqual.classList.remove("equal1");
  keyEqual.classList.remove("equal3");
  screenBg.style.backgroundColor = "hsl( var(--clr-screen-bg-light-gray))";
  keysBg.style.backgroundColor = "hsl( var(--clr-toggle-bg-red))";
}

function theme_3() {
  //   toggleSwitch.classList.add("horizTranslate3");
  //   toggleSwitch.classList.remove("horizTranslate2");
  //   toggleSwitch.classList.remove("horizTranslate1");
  //   toggleSwitch.classList.add("hoverClass3");
  //   toggleSwitch.classList.remove("hoverClass2");
  //   toggleSwitch.classList.remove("hoverClass1");
  body.style.backgroundColor = "hsl( var(--clr-main-bg-violet))";
  //   outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-violet))";
  //   buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-violet))";
  //   legendContainer.style.color = "hsl( var(--clr-text-lightYellow))";
  //   toggleButton.style.backgroundColor = "hsl( var(--clr-key-pureCyan-bg))";

  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = "hsl( var(--clr-text-lightYellow))";
  }

  for (var i = 0; i < keyButtons.length; i++) {
    keyButtons[i].classList.add("hoverKeys3");
    keyButtons[i].classList.remove("hoverKeys2");
    keyButtons[i].classList.remove("hoverKeys1");
  }

  for (var i = 0; i < keyReset.length; i++) {
    keyReset[i].classList.add("reset3");
    keyReset[i].classList.remove("reset1");
    keyReset[i].classList.remove("reset2");
  }

  keyEqual.classList.add("equal3");
  keyEqual.classList.remove("equal2");
  keyEqual.classList.remove("equal1");
  screenBg.style.backgroundColor = "hsl( var(--clr-toggle-bg-violet))";
  keysBg.style.backgroundColor = "hsl( var(--clr-toggle-bg-violet))";
}

// let light = window.matchMedia("(prefers-color-scheme: light)").matches;

// if (light) {
//   theme_2();
// }

//-------------------//
//    Calculator     //
//-------------------//

const screenElt = document.getElementById("screen");
const entry = document.querySelectorAll(".key");
const operators = document.querySelectorAll(".operators");
let display = "";
let result = [];

for (var keyPress of entry) {
  keyPress.addEventListener("click", printScreen);
}

function printScreen() {
  let keyPress = this.innerText;
  if (parseFloat(keyPress) >= 0) {
    display =
      display === "" ? keyPress.toString() : display + keyPress.toString();
    screenElt.innerText = display;
  } else if (keyPress === ".") {
    display =
      display === "" ? keyPress.toString("") : display + keyPress.toString("");
    screenElt.innerText = display;
  } else if (keyPress === "DEL") {
    screenElt.innerHTML = screenElt.innerHTML.slice(screenElt.length, -1);
    display = screenElt.innerHTML;
  } else if (keyPress === "RESET") {
    display = "";
    screenElt.innerHTML = display;
    result = [];
  }
}

function storeSum() {
  for (var i = 0; i < 1; i++) {
    result.push(display);
    display = "";
  }
  for (var i = 1; i < 2; i++) {
    result.push(display + "+");
    display = "";
  }
}

function storeMinus() {
  for (var i = 0; i < 1; i++) {
    result.push(display);
    display = "";
  }
  for (var i = 1; i < 2; i++) {
    result.push(display + "-");
    display = "";
  }
}

function storeMultiply() {
  for (var i = 0; i < 1; i++) {
    result.push(display);
    display = "";
  }
  for (var i = 1; i < 2; i++) {
    result.push(display + "*");
    display = "";
  }
}

function storeDivide() {
  for (var i = 0; i < 1; i++) {
    result.push(display);
    display = "";
  }
  for (var i = 1; i < 2; i++) {
    result.push(display + "/");
    display = "";
  }
}

function displayResult() {
  try {
    eval(result.join(" "));
  } catch (EvalError) {
    screenElt.innerHTML = "SyntaxError";
  }

  result.push(display);
  var final = eval(result.join(" "));
  final = Math.round((final + Number.EPSILON) * 10000000) / 10000000;
  screenElt.innerText = final;
  result = [];
  display = "";
  result.push(screenElt.innerText);
}
