const listaJogos = document.querySelector('.lista-jogos');


games.forEach(function(game) {

  const article = document.createElement('article');

  article.classList.add('game');

  article.innerHTML = `
    <img src="${game.imagem}" alt="${game.nome}">
    <h3>${game.nome}</h3>
  `;

  article.onclick = function() {
    abrirJogo(game.id);
  };

  listaJogos.appendChild(article);

});


function abrirJogo(idJogo) {

  const jogo = games.find(function(game) {
    return game.id === idJogo;
  });


  const modal = document.getElementById("modalJogo");

  const modalTitulo = document.getElementById("modalTitulo");

  const modalDescricao = document.getElementById("modalDescricao");

  const modalGif = document.getElementById("modalGif");


  modalTitulo.textContent = jogo.nome;

  modalDescricao.textContent = jogo.descricao;

  modalGif.src = jogo.gif;

  modalGif.alt = jogo.nome;


  modal.style.display = "flex";

}


function fecharJogo() {

  const modal = document.getElementById("modalJogo");

  modal.style.display = "none";

}