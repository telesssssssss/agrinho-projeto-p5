// fantasia, aventura, drama 

// A Babá Encantada, LIVRE , fantasia
// Contos do Caçador de Sombras, 10 , fantasia
// Batman: O Cavaleiro das Trevas,14 , drama e aventura
// O Senhor dos Anéis, aventura, 2001
// Avatar: O Caminho da Água, 14 , aventura
// Vingadores: Ultimato,12 , fantasia e aventura
// Moana, Livre, 2016 , Aventuras

let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
  campoAventura = createCheckbox("Gosta de drama?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Batman: O Cavaleiro das Trevas";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Moana";          
        } else{
         return "Vingadores: Ultimato";
        }
      } else {
        if (gostaDeFantasia) {
          return "O Senhor dos Anéis";
        } else {
          return "Batman: O Cavaleiro das Trevas";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A Babá Encantada";
    } else {
      return "Contos do Caçador de Sombras";
    }
  }
}
