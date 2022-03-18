const btnTexto = document.querySelector("#btn-texto");

btnTexto.addEventListener("click", function () {
  // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  const tagH1 = document.createElement("h3"); // Cria uma tag h2 e adiciona a let tagH1
  const h1Text = document.createTextNode("Texto criado no JS"); // Cria um texto e adiciona a let h1Text

  tagH1.appendChild(h1Text); // Adiciona à tag H1 o texto criado acima

  document.body.appendChild(tagH1); // Adiciona ao body a h1 criada, com seu texto.
  document.body.style.backgroundImage =
    "url('http://www.blogcdn.com/wow.joystiq.com/media/2007/08/insiderzgenter.jpg')";
});

window.onload = function () {
  alert("Olá web, aqui é o javascript");
};
