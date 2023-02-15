// obtém a referência ao modal e ao botão de fechar
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close");

// exibe o modal após 1 segundo
setTimeout(function() {
  modal.style.display = "block";
}, 1000);

// fecha o modal quando o usuário clica no botão de fechar
closeButton.onclick = function() {
  modal.style.display = "none";
}
