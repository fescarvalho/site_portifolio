// Acessar a janela(browser)
// Pegar o HTML todo
// Pegar o botao
// Saber que esta sendo clicado no botao

// Acessar a janela
// Acessar o Html todo
// Pegar o elements
// Mover o elements para a direita

const elements = document.querySelector('.elements');
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');

let pixels = 10;

btnRight.addEventListener("click", function() {
    pixels = pixels + 30;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener("click", function() {
    pixels = pixels - 30;
    elements.style = `transform: translateX(${pixels}px)`;
});