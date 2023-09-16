const header = document.querySelector('header');
const windowHeight = window.innerHeight;

function ajustarPosicaoDoHeader() {
    header.style.bottom = '0';

    var conteudoAbaixoDoHeader = windowHeight - header.clientHeight;
    document.body.style.marginTop = conteudoAbaixoDoHeader + 'px';
}

window.addEventListener('load', ajustarPosicaoDoHeader());
const alturaHeader = window.getComputedStyle(header).getPropertyValue('height')

window.addEventListener('scroll', function () {
    if (scrollY >= windowHeight - 80) {
        header.style.position = 'sticky';
        header.style.top = '0'
    }
})