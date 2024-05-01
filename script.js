document.addEventListener('DOMContentLoaded', function () {
  const responsive = document.getElementById('responsive')
  const ul = document.getElementById('ul')

  window.addEventListener('resize', () => {
      if (window.innerWidth >= 600) {
          ul.style.display = 'flex'
      } else {
          ul.style.display = 'none'
      }
  })

  responsive.addEventListener('click', () => {

      if (ul.style.display == 'block') {
          ul.style.display = 'none'
      } else {
          ul.style.display = 'block'
      }
  })

  if (responsive.style.display == 'block') {
      ul.addEventListener('click', (e) => {
          if (e.target) {
              ul.style.display = 'none'
          }
      })
  }


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
  var nav = document.querySelector('nav');
  var aboutSection = document.querySelector('#about');

  var sectionTop = aboutSection.offsetTop;
  var scrollPosition = window.scrollY;

  if (scrollPosition >= sectionTop) {
    nav.style.backgroundColor = '#000'; // Altera o fundo do cabeçalho para preto ao rolar sobre a seção #about
  } else {
    nav.style.backgroundColor = 'rgba(0, 0, 0, 0.486)'; // Restaura o fundo transparente do cabeçalho se não estiver rolando sobre a seção #about
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
})

});

