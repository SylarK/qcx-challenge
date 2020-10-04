const burguer = document.querySelector('.btn');
const opcoes = document.querySelectorAll('.opcoes');

window.addEventListener('load', () => {
  listenBurguer();
});

function listenBurguer() {
  burguer.addEventListener('click', () => {
    opcoes.forEach((opcao) => {
      opcao.classList.toggle('mostrar');
      //console.log(opcao);
    });
  });
}
