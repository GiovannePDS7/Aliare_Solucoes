const header = document.querySelector('header');
const windowHeight = window.innerHeight;

function ajustarPosicaoDoHeader() {
    header.style.bottom = '0';

    var conteudoAbaixoDoHeader = windowHeight - header.clientHeight;
    document.body.style.marginTop = conteudoAbaixoDoHeader + 'px';
}

window.addEventListener('load', ajustarPosicaoDoHeader());
let headerHeight = parseInt(window.getComputedStyle(header).getPropertyValue('height'), 10);

window.addEventListener('scroll', function () {
    if (scrollY >= windowHeight - headerHeight) {
        header.style.position = 'sticky';
        header.style.top = '0';
    }
})