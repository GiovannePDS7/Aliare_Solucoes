const header = document.querySelector('header');
const windowHeight = window.innerHeight;

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

function ajustarPosicaoDoHeader() {
    header.style.bottom = '0';

    var conteudoAbaixoDoHeader = windowHeight - header.clientHeight;
    document.body.style.marginTop = conteudoAbaixoDoHeader + 'px';
}

window.addEventListener('load', ajustarPosicaoDoHeader());
let headerHeight = parseInt(window.getComputedStyle(header).getPropertyValue('height'), 10);

window.addEventListener('scroll', function () {
    if (scrollY >= windowHeight - headerHeight) {
        header.style.top = '0';
    }
})

ContainerLeft.addEventListener('mouseover', function () {
    LContainerLeft.style.width = '100%';
    LContainerLeft.style.borderRadius = '8%';
    Linha1.style.display = 'none';
});
ContainerLeft.addEventListener('mouseleave', function () {
    LContainerLeft.style.width = width;
    LContainerLeft.style.borderRadius = BRadius;
    Linha1.style.display = 'block';
});

ContainerCenter.addEventListener('mouseover', function () {
    LContainerCenter.style.width = '100%';
    LContainerCenter.style.borderRadius = '8%';
    Linha2.style.display = 'none';
});
ContainerCenter.addEventListener('mouseleave', function () {
    LContainerCenter.style.width = width;
    LContainerCenter.style.borderRadius = BRadius;
    Linha2.style.display = 'block';
});

ContainerRight.addEventListener('mouseover', function () {
    LContainerRight.style.width = '100%';
    LContainerRight.style.borderRadius = '8%';
    Linha3.style.display = 'none';
});
ContainerRight.addEventListener('mouseleave', function () {
    LContainerRight.style.width = width;
    LContainerRight.style.borderRadius = BRadius;
    Linha3.style.display = 'block';
});
