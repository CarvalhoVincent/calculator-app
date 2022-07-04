const outerContainer = document.getElementById("switch");
const body = document.getElementById("body");
const textColor = document.getElementsByClassName("textColor");
let keyButtons = document.getElementsByClassName("keyButtons");
let keyReset = document.getElementsByClassName("keyRESET");
let keyEqual = document.getElementsByClassName("keyEqual")[0];
const screenBg = document.getElementById("screen-bg");
const keysBg = document.getElementById("keysBg");
const themeRadioBtns = document.getElementsByClassName("theme-radio");


//-------------------//
//      Themes       //
//-------------------//


var theme1 = {
    body: "hsl( var(--clr-main-bg-blue))",
    keysBg: "hsl( var(--clr-screen-bg-blue))",
    outerContainer: "hsl( var(--clr-toggle-bg-blue))",
    screenBg: "hsl( var(--clr-screen-bg-blue))",
    textColor() { 
        for (var i = 0; i < textColor.length; i++) {
        textColor[i].style.color = "hsl( var(--clr-text-white))"
    }},
    keyButtons() {
        for(var i=0; i< keyButtons.length; i++){
            keyButtons[i].style.color = "hsl( var(--clr-text-grayishBlue))";
            keyButtons[i].classList.add('hoverKeys1');
            keyButtons[i].classList.remove('hoverKeys2');
            keyButtons[i].classList.remove('hoverKeys3');
        }
    },  
    keyReset() {
        for(var i=0; i< keyReset.length; i++){
            keyReset[i].classList.add('reset1');
            keyReset[i].classList.remove('reset2');
            keyReset[i].classList.remove('reset3');
        }
    },
    keyEqual() {
        keyEqual.classList.add('equal1');
        keyEqual.classList.remove('equal2');
        keyEqual.classList.remove('equal3');
    }
};

 
var theme2 = {
    body: "hsl( var(--clr-main-bg-gray))",
    keysBg: "hsl( var(--clr-toggle-bg-red))",
    outerContainer: "hsl( var(--clr-toggle-bg-red))",
    screenBg: "hsl( var(--clr-screen-bg-light-gray))",
    textColor() { 
        for (var i = 0; i < textColor.length; i++) {
        textColor[i].style.color = "hsl( var(--clr-text-grayishYellow))"
    }},
    keyButtons() {
        for(var i=0; i< keyButtons.length; i++){
            keyButtons[i].classList.add('hoverKeys2');
            keyButtons[i].classList.remove('hoverKeys1');
            keyButtons[i].classList.remove('hoverKeys3');
        }
    },  
    keyReset() {
        for(var i=0; i< keyReset.length; i++){
            keyReset[i].classList.add('reset2');
            keyReset[i].classList.remove('reset1');
            keyReset[i].classList.remove('reset3');
        }
    },
    keyEqual() {
        keyEqual.classList.add('equal2');
        keyEqual.classList.remove('equal1');
        keyEqual.classList.remove('equal3');
    }
};

  
var theme3 = {
    body: "hsl( var(--clr-main-bg-violet))",
    keysBg: "hsl( var(--clr-toggle-bg-violet))",
    outerContainer: "hsl( var(--clr-toggle-bg-violet))",
    screenBg: "hsl( var(--clr-toggle-bg-violet))",
    textColor() { 
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "hsl( var(--clr-text-lightYellow))"
        }
    },
    keyButtons() {
        for(var i=0; i< keyButtons.length; i++){
            keyButtons[i].classList.add('hoverKeys3');
            keyButtons[i].classList.remove('hoverKeys2');
            keyButtons[i].classList.remove('hoverKeys1');
        }
    },  
    keyReset() {
        for(var i=0; i< keyReset.length; i++){
            keyReset[i].classList.add('reset3');
            keyReset[i].classList.remove('reset2');
            keyReset[i].classList.remove('reset1');
        }
    },
    keyEqual() {
        keyEqual.classList.add('equal3');
        keyEqual.classList.remove('equal2');
        keyEqual.classList.remove('equal1');
    }
};



function changeTheme(theme) {
    
    return  body.style.backgroundColor = theme.body,
            keysBg.style.backgroundColor = theme.keysBg,
            outerContainer.style.backgroundColor = theme.outerContainer,
            screenBg.style.backgroundColor = theme.screenBg,
            theme.textColor(),
            theme.keyButtons(),
            theme.keyReset(),
            theme.keyEqual();
}


let light = window.matchMedia("(prefers-color-scheme: light)").matches;

if (light) {
   changeTheme(theme2);
   themeRadioBtns[1].checked = true;
}

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
};