document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', function () {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
});

const button = document.getElementById('agende');

button.addEventListener('click', () => {
  button.classList.add('button-grow');
    setTimeout(() => {
      button.classList.remove('button-grow');
    }, 100);

});
button.addEventListener('mouseenter', () => {
  button.classList.add('button-grow');
});
button.addEventListener('mouseleave', () => {
  button.classList.remove('button-grow');
});

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var nav = document.querySelector('.menu')
  var aboutSection = document.querySelector('#about');

  var sectionTop = aboutSection.offsetTop;
  var scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop) {
    header.style.backgroundColor = '#000'; // Altera o fundo do cabeçalho para preto ao rolar sobre a seção #about
    nav.style.backgroundColor = '#000';
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.486)'; // Restaura o fundo transparente do cabeçalho se não estiver rolando sobre a seção #about
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.486)';
  }
});


const carrossel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.container');
const anteriorBtn = document.querySelector('.anterior');
const proximoBtn = document.querySelector('.proximo');

let currentIndex = 0;

function mostrarSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
}

mostrarSlide(currentIndex);

proximoBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  mostrarSlide(currentIndex);
});

anteriorBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  mostrarSlide(currentIndex);
});