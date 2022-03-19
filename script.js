const btnTexto = document.querySelector("#btn");
var count = 0;

btnTexto.addEventListener("click", function () {
  count++;
  //   // Adiciona um evento de click no botão capturado e assim que for clicado, executa a função.
  //   const tagH1 = document.createElement("h3"); // Cria uma tag h2 e adiciona a let tagH1
  //   const h1Text = document.createTextNode("Texto criado no JS"); // Cria um texto e adiciona a let h1Text

  //   tagH1.appendChild(h1Text); // Adiciona à tag H1 o texto criado acima

  //   document.body.appendChild(tagH1); // Adiciona ao body a h1 criada, com seu texto.
  if (count == 1) {
    document.body.style.backgroundImage = "url('./assets/img/DD-tavern.jpg')";
    document.getElementById('voljinBox').src='./assets/img/voljin2.jpg';
    document.getElementById("h11").innerHTML = "Yo-ho!!! Bora BEBER";
  } else if (count == 2) {
    document.body.style.backgroundImage =
      "url('./assets/img/taverna_azeroth.jpg')";
      document.getElementById('voljinBox').src='./assets/img/voljin3.jpg';
      document.getElementById("h11").innerHTML = "O cão Foi quem butô pa nois bebe";
  } else if (count == 3) {
    document.body.style.backgroundImage =
      "url('./assets/img/taverna-the-geek-life.jpg')";
      document.getElementById('voljinBox').src='./assets/img/voljin4.jpg';
      document.getElementById("h11").innerHTML = "Vou te jogar Mandinga";
  } else if (count == 4) {
    alert("Vai com calma, nosso amigo Voljin não é de ferro. Amanhã é um outro dia");
    count = 0;
    document.body.style.backgroundImage =
      "url('./assets/img/taverna1.jpg')";
      document.getElementById('voljinBox').src='./assets/img/voljin1.jpg';
      document.getElementById("h11").innerHTML = "Coé!?!";
  }
});

// window.onload = function () {
//   document.body.style.backgroundImage ="url('./assets/img/Taverna.jpg')";
// };
