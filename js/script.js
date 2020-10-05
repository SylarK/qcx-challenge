const burguer = document.querySelector('.btn');
const opcoes = document.querySelectorAll('.opcoes');

const outRepositorios = document.querySelector('#repositorios');
const outSeguidores = document.querySelector('#seguidores');
const outSeguindo = document.querySelector('#seguindo');
const link = document.querySelector('#ref-link');
const imgProfile = document.querySelector('#imagem');

const btnRepositorio = document.querySelector('#btnRepositorio');
const btnFavorito = document.querySelector('#btnFavorito');

const dataRepo = [];
let variavel = null;

window.addEventListener('load', () => {
  listenBurguer();
  doFetchDataGit();
  doFetchDataRepo();
});

function listenBurguer() {
  burguer.addEventListener('click', () => {
    opcoes.forEach((opcao) => {
      opcao.classList.toggle('mostrar');
      //console.log(opcao);
    });
  });
}

function printData(data) {
  outRepositorios.innerHTML = data.public_repos;
  outSeguidores.innerHTML = data.followers;
  outSeguindo.innerHTML = data.following;

  imgProfile.setAttribute('src', data.avatar_url);
  imgProfile.setAttribute('title', data.name);
  link.setAttribute('href', data.html_url);
}

async function doFetchDataGit() {
  try {
    const res = await fetch('https://api.github.com/users/SylarK');
    const json = await res.json();
    printData(json);
    /* console.log(json); */
  } catch (err) {
    console.log('Lucas, houve um erro na requisição ao Github/Users.');
    console.log(`Log -> ${err}`);
  }
}

async function doFetchDataRepo() {
  try {
    const res = await fetch('https://api.github.com/users/SylarK/repos');
    const json = await res.json();
    variavel = json;
    dataRepo = json.map((data) => {
      const { id, name, html_url } = data;

      return {
        id,
        name,
        html_url,
      };
    });
    /* console.log(json); */
  } catch (err) {
    console.log('Lucas, houve um erro na requisição ao Github/Repos.');
    console.log(`Log -> ${err}`);
  }
}
