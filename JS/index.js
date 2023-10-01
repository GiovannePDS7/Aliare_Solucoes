const Frame = document.getElementById('containerFrame');
const Frame2 = document.getElementById('containerFrame2');

const FrameSpan = document.getElementById('FrameSpan');
const FrameText = document.getElementById('FrameText');
const phrase = ['Confiança', 'Qualidade', 'Transparência'];
let phraseIndice = 0;
let indice = 0;

const toggleElement = document.getElementById("toggleElement");
function toggle() {
    if (toggleElement.style.visibility === "hidden" || toggleElement.style.visibility === "") {
        toggleElement.style.visibility = "visible";
    } else {
        toggleElement.style.visibility = "hidden";
    }
}
function zerarIndice() {
    toggleElement.style.visibility = "visible";
    if (indice > 0) {
        indice--;
        FrameSpan.innerHTML = FrameSpan.innerHTML.slice(0, -1);
        setTimeout(zerarIndice, 120);
    }
    else {
        addTextFrame();
    }
}

function addTextFrame() {
    if (indice < phrase[phraseIndice].length) {
        toggleElement.style.visibility = "visible";
        FrameSpan.innerHTML += phrase[phraseIndice][indice];
        indice++;
        setTimeout(addTextFrame, 120);
    } else {
        const toggleInterval = setInterval(toggle, 500);
        setTimeout(function () {
            zerarIndice()
            clearInterval(toggleInterval);
            phraseIndice++;
            if (phraseIndice >= phrase.length) {
                phraseIndice = 0;
            }
        }, 2300);
    }
}
addTextFrame();