let toggleSwitch = document.getElementsByClassName('redButton')[0];
const outerContainer = document.getElementById("outerContainer");
const buttonContainer = document.getElementById("buttonContainer");
const legendContainer = document.getElementById("legendTextContainer");
const toggleButton = document.getElementById("toggleButton");
const body = document.getElementById("body"); 
let textColor = document.getElementsByClassName('textColor');
let keyButtons = document.getElementsByClassName('keyButtons');





function theme_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    body.style.backgroundColor = "hsl( var(--clr-main-bg-blue))";
    outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-blue))";
    buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-blue))";
    legendContainer.style.color = "hsl( var(--clr-text-white))";
    toggleButton.style.backgroundColor = "hsl( var(--clr-key-red-bg))";
    for(var i=0; i< textColor.length; i++){
        textColor[i].style.color = "hsl( var(--clr-text-white))";
    }
    for(var i=0; i< keyButtons.length; i++){
        keyButtons[i].style.color = "hsl( var(--clr-text-grayishBlue))";
    }
}

function theme_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    body.style.backgroundColor = "hsl( var(--clr-main-bg-gray))";
    outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-gray))";
    buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-red))";
    legendContainer.style.color = "hsl( var(--clr-text-grayishYellow))";
    toggleButton.style.backgroundColor = "hsl( var(--clr-key-redish-bg))";
    for(var i=0; i< textColor.length; i++){
        textColor[i].style.color = "hsl( var(--clr-text-grayishYellow))";
    }
}

function theme_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    body.style.backgroundColor = "hsl( var(--clr-main-bg-violet))";
    outerContainer.style.backgroundColor = "hsl( var(--clr-main-bg-violet))";
    buttonContainer.style.backgroundColor = "hsl( var(--clr-toggle-bg-violet))";
    legendContainer.style.color = "hsl( var(--clr-text-lightYellow))";
    toggleButton.style.backgroundColor = "hsl( var(--clr-key-pureCyan-bg))";
    for(var i=0; i< textColor.length; i++){
        textColor[i].style.color = "hsl( var(--clr-text-lightYellow))";
    }
    
}
