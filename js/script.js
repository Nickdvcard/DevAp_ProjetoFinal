//alert('teste');

//menu dropdwon do header
let navbar = document.querySelector('.navbar');
let fabars = document.querySelector('.barra');

fabars.addEventListener('click', () => {

    navbar.classList.toggle("ativar");
})


//carrossel na home
const botoes = document.querySelectorAll('.but-carrossel');
let slideatual = 0;
const slides = document.querySelectorAll('.slide');
const maxslides = slides.length;

let textoatual = 0;
const textos = document.querySelectorAll('.textoslide');
const maxtextos = textos.length;

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const botesq = botao.classList.contains('ret');


        if (botesq) {
            slideatual = slideatual - 1;
            textoatual = textoatual - 1;
        }

        else {
            slideatual = slideatual + 1;
            textoatual = textoatual + 1;
        }

        if (slideatual >= maxslides) {
            slideatual = 0;
            textoatual = 0;
        }

        if (slideatual < 0) {
            slideatual = maxslides - 1;
            textoatual = maxtextos - 1;
        }

        console.log('botao esquerdo clicado', botesq, slideatual, maxslides);
        console.log(slides, textos)

        slides.forEach(slide => slide.classList.remove('atual'));
        textos.forEach(texto => texto.classList.remove('atual'));

        slides[slideatual].classList.add('atual');
        textos[textoatual].classList.add('atual');
    });
});

//carrossel testemonial

const slider = document.querySelector('.slider');
const leftarrow = document.querySelector('.left');
const rightarrow = document.querySelector('.right');

var sectionIndex = 0;

rightarrow.addEventListener('click', () => {

    if (sectionIndex < 3) {
        sectionIndex = sectionIndex + 1;
    }

    else if (sectionIndex >= 3) {
        sectionIndex = 0;
    }

    slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
})

leftarrow.addEventListener('click', () => {

    if (sectionIndex > 0) {
        sectionIndex = sectionIndex - 1;
    }

    else if (sectionIndex <= 0) {
        sectionIndex = 3;
    }

    slider.style.transform = 'translate('+ (sectionIndex) * -25 +'%)';
})
