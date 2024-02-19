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
if (window.innerWidth > 1024) {
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    const liProjetos = document.getElementById('liProjetos');
    const liParceiros = document.getElementById('liParceiros');
    const liQmSomos = document.getElementById('liQmSomos');
    const projetoSection = document.getElementById('projeto');
    const parceirosSection = document.getElementById('Parceiros');
    const qmsomosSection = document.getElementById('QmSomos');

    const liFooterParceiros = document.getElementById('liFooterParceiros');
    const liFooterProjetos = document.getElementById('liFooterProjetos');
    const liFooterQmSomos = document.getElementById('liFooterQmSomos');

    document.addEventListener('DOMContentLoaded', function () {
        liParceiros.addEventListener('click', function () {
            parceirosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
        liProjetos.addEventListener('click', function () {
            projetoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
        liQmSomos.addEventListener('click', function () {
            qmsomosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
        liFooterParceiros.addEventListener('click', function () {
            parceirosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
        liFooterProjetos.addEventListener('click', function () {
            projetoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
        liFooterQmSomos.addEventListener('click', function () {
            qmsomosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollBy(0, -headerHeight + 1);
        });
    });


    const ContainerLeft = document.getElementById('containerLeft');
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

    ContainerLeft.addEventListener('mouseover', function () {

        LContainerLeft.style.width = '100%';
        LContainerLeft.style.borderRadius = '2%';
        Linha1.style.background = '#000';

    });
    ContainerLeft.addEventListener('mouseleave', function () {

        LContainerLeft.style.width = width;
        LContainerLeft.style.borderRadius = BRadius;
        Linha1.style.background = 'linear-gradient(to bottom, #30B0A4, #46D1C4, #57D8CC, #57E6D9)'

    });

    ContainerCenter.addEventListener('mouseover', function () {

        LContainerCenter.style.width = '100%';
        LContainerCenter.style.borderRadius = '2%';
        Linha2.style.background = '#000';

    });
    ContainerCenter.addEventListener('mouseleave', function () {

        LContainerCenter.style.width = width;
        LContainerCenter.style.borderRadius = BRadius;
        Linha2.style.background = 'linear-gradient(to bottom, #497BB2, #6495CB, #80AFE1, #88B6E8)';

    });

    ContainerRight.addEventListener('mouseover', function () {

        LContainerRight.style.width = '100%';
        LContainerRight.style.borderRadius = '2%';
        Linha3.style.background = '#000';

    });
    ContainerRight.addEventListener('mouseleave', function () {

        LContainerRight.style.width = width;
        LContainerRight.style.borderRadius = BRadius;
        Linha3.style.background = 'linear-gradient(to bottom, #76C5F0, #82CEF8, #8AD1F8, #9EDDFF)';

    });
}

let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}