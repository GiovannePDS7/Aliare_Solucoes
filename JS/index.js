const ContainerLeft = document.getElementById('containerLeft')
const LContainerLeft = document.getElementById('littleContainerLeft');

const ContainerCenter = document.getElementById('containerCenter')
const LContainerCenter = document.getElementById('littleContainerCenter');

const ContainerRight = document.getElementById('containerRight')
const LContainerRight = document.getElementById('littleContainerRight');

const width = window.getComputedStyle(LContainerLeft).getPropertyValue('width', 10)
const BRadius = window.getComputedStyle(LContainerLeft).getPropertyValue('border-radius')

const Linha1 = document.getElementById('linhaInfo1');
const Linha2 = document.getElementById('linhaInfo2');
const Linha3 = document.getElementById('linhaInfo3');

const Frame = document.getElementById('containerFrame');
const Frame2 = document.getElementById('containerFrame2');


const FrameSpan = document.getElementById('FrameSpan');
const FrameText = document.getElementById('FrameText');
const phrase = ['Confiança', 'Qualidade', 'Transparência'];

ContainerLeft.addEventListener('mouseover', function () {
    LContainerLeft.style.width = '100%';
    LContainerLeft.style.borderRadius = '2%';
    Linha1.style.display = 'none';
});
ContainerLeft.addEventListener('mouseleave', function () {
    LContainerLeft.style.width = width;
    LContainerLeft.style.borderRadius = BRadius;
    Linha1.style.display = 'block';
});

ContainerCenter.addEventListener('mouseover', function () {
    LContainerCenter.style.width = '100%';
    LContainerCenter.style.borderRadius = '2%';
    Linha2.style.display = 'none';
});
ContainerCenter.addEventListener('mouseleave', function () {
    LContainerCenter.style.width = width;
    LContainerCenter.style.borderRadius = BRadius;
    Linha2.style.display = 'block';
});

ContainerRight.addEventListener('mouseover', function () {
    LContainerRight.style.width = '100%';
    LContainerRight.style.borderRadius = '2%';
    Linha3.style.display = 'none';
});
ContainerRight.addEventListener('mouseleave', function () {
    LContainerRight.style.width = width;
    LContainerRight.style.borderRadius = BRadius;
    Linha3.style.display = 'block';
});
let phraseIndice = 0;
let indice = 0;


function adicionarLetraAoSaida() {
    if (indice < phrase[phraseIndice].length) {
        FrameSpan.innerHTML += phrase[phraseIndice][indice];
        indice++;
        if (phraseIndice == 0) {

            Frame.style.background = '#2BAFA2';
            Frame2.style.background = '#209489';
        }
        else if (phraseIndice == 1) {

            Frame.style.background = '#73C4F1';
            Frame2.style.background = '#66b1da';
        } else {
            if (phraseIndice == 2) {

                Frame.style.background = '#417AB1';
                Frame2.style.background = '#3a6fa1';
            }
        }
        setTimeout(adicionarLetraAoSaida, 165);
    } else {
        setTimeout(function () {
            indice = 0;
            phraseIndice++;
            if (phraseIndice >= phrase.length) {
                phraseIndice = 0;
            }
            FrameSpan.innerHTML = '';
            adicionarLetraAoSaida();
        }, 1200);
    }
}

adicionarLetraAoSaida();

