// Selecionar todos os elementos
const iniciar = document.getElementById("start");
const quiz = document.getElementById("quiz");
const imagem = document.getElementById("imagem");
const question = document.getElementById("question");
const alternativaA = document.getElementById("A");
const alternativaB = document.getElementById("B");
const alternativaC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");
const jogarNovamente = document.getElementById("jogarNovamente");
const tituloJogar = document.getElementById("titulo-jogo");

let questoes = [
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/chansey.jpg",
    alternativaA: "Vulpix",
    alternativaB: "Chansey",
    alternativaC: "Raticate",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/weezing.jpg",
    alternativaA: "Weezing",
    alternativaB: "Slowpoke",
    alternativaC: "Ponyta",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/slowbro.jpg",
    alternativaA: "Vulpix",
    alternativaB: "Vaporeon",
    alternativaC: "Slowbro",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/squirtle.jpg",
    alternativaA: "Persian",
    alternativaB: "Squirtle",
    alternativaC: "Psyduck",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/pidgey.jpg",
    alternativaA: "Pidgey",
    alternativaB: "Mew",
    alternativaC: "Pikachu",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/pikachu.jpg",
    alternativaA: "Ponyta",
    alternativaB: "Charmander",
    alternativaC: "Pikachu",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/charmander.jpg",
    alternativaA: "Charmander",
    alternativaB: "Dragonair",
    alternativaC: "Charizard",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/clefairy.jpg",
    alternativaA: "Eevee",
    alternativaB: "Jynx",
    alternativaC: "Clefairy",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/bulbasaur.jpg",
    alternativaA: "Charmander",
    alternativaB: "Bulbasaur",
    alternativaC: "Lapras",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/dragonite.jpg",
    alternativaA: "Dragonair",
    alternativaB: "Dragonite",
    alternativaC: "Charizard",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/mew.jpg",
    alternativaA: "Mew",
    alternativaB: "Mewtwo",
    alternativaC: "Ninetales",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/vulpix.jpg",
    alternativaA: "Weezing",
    alternativaB: "Vulpix",
    alternativaC: "Ninetales",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/vaporeon.jpg",
    alternativaA: "Raticate",
    alternativaB: "Slowpoke",
    alternativaC: "Vaporeon",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/mewtwo.jpg",
    alternativaA: "Mew",
    alternativaB: "Mewtwo",
    alternativaC: "Ninetales",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/slowpoke.jpg",
    alternativaA: "Slowpoke",
    alternativaB: "Mr. Mime",
    alternativaC: "Persian",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/psyduck.jpg",
    alternativaA: "Squirtle",
    alternativaB: "Ponyta",
    alternativaC: "Psyduck",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/ponyta.jpg",
    alternativaA: "Pidgey",
    alternativaB: "Ponyta",
    alternativaC: "Jynx",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/ninetales.jpg",
    alternativaA: "Mew",
    alternativaB: "Mewtwo",
    alternativaC: "Ninetales",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/gyarados.jpg",
    alternativaA: "Gyarados",
    alternativaB: "Jigglypuf",
    alternativaC: "Eevee",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/eevee.jpg",
    alternativaA: "Eevee",
    alternativaB: "Gyarados",
    alternativaC: "Meowth",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/articuno.jpg",
    alternativaA: "Articuno",
    alternativaB: "Chansey",
    alternativaC: "Pidgey",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/lapras.jpg",
    alternativaA: "Mew",
    alternativaB: "Pikachu",
    alternativaC: "Lapras",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/jigglypuf.jpg",
    alternativaA: "Dragonite",
    alternativaB: "Jynx",
    alternativaC: "Jigglypuf",
    resposta: "C"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/mr_mime.jpg",
    alternativaA: "Meowth",
    alternativaB: "Mr. Mime",
    alternativaC: "Ninetales",
    resposta: "B"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/jynx.jpg",
    alternativaA: "Jynx",
    alternativaB: "Dragonair",
    alternativaC: "Ninetales",
    resposta: "A"
  },
  {
    question: "Qual é o Pokémon?",
    imgSrc: "img/meowth.jpg",
    alternativaA: "Mew",
    alternativaB: "Mewtwo",
    alternativaC: "Meowth",
    resposta: "C"
  }

];

// Variáveis
let lastQuestionIndex = questoes.length - 1;
let runningQuestionIndex =  0;
const questionTime = 3; // 3 segundos para responder
const tamanhoBarra = 150;
let count = 0;
const progressoBarraTempo = tamanhoBarra / questionTime;
let TIMER;
let score = 0;


// Mostrar as perguntas
function renderQuestion() {
 let q =  questoes[runningQuestionIndex];
  question.innerHTML = "<p>" + q.question + "</p>";
  imagem.innerHTML = "<img src= "+ q.imgSrc + ">";
  alternativaA.innerHTML = q.alternativaA;
  alternativaB.innerHTML = q.alternativaB;
  alternativaC.innerHTML = q.alternativaC;
}; // fim da renderQuestion

// Iniciar Quiz
iniciar.addEventListener("click", startQuiz);
function startQuiz() {
  iniciar.style.display = "none";
  tituloJogar.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  progressRender();
  counterRender();
  TIMER = setInterval(counterRender, 1000);
}; // fim da startQuiz

// Reiniciar Jogo
jogarNovamente.addEventListener("click", reiniciarJogo);
function reiniciarJogo() {
  document.location.href = "";
}


// Render Progress
function progressRender() {
  for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}; // fim da progressRender

// Barra de tempo
function counterRender() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * progressoBarraTempo  + "px";
    count++;
  } else {
    count = 0; // voltar para o 0
    answerIsWrong();
    if (runningQuestionIndex < lastQuestionIndex) {
      runningQuestionIndex++;
      renderQuestion();
    } else {
      // finaliza o quiz e mostra o resultado
      clearInterval(TIMER);
      scoreRender();
    }
  }
}; // fim da counterRender


// Respostas

function checkAnswer(alternativa) {
  if(alternativa == questoes[runningQuestionIndex].resposta) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  count = 0;
  if (runningQuestionIndex < lastQuestionIndex) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}; // fim da checkAnswer


// Resposta certa
function answerIsCorrect() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "green";
}

// resposta errada
function answerIsWrong() {
  document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}


function scoreRender() {
  scoreContainer.style.display = "block";
  jogarNovamente.style.display = "block";
  let scorePercent = Math.round(100 * score / questoes.length);
  


  let finalDoQuiz = (scorePercent >= 80) ? scoreContainer.innerHTML = "<p>Você foi SUPER bem!<br> " + " Sua porcentagem é de: " + scorePercent + "%!</p>" : 
                    (scorePercent >= 60) ? scoreContainer.innerHTML = "<p>Parabéns!<br>" + " Sua porcentagem é de: " + scorePercent + "%!</p>": 
                    (scorePercent >= 40) ? scoreContainer.innerHTML = "<p>Precisa estudar um pouco mais!<br> " + "Sua porcentagem é de: " + scorePercent + "%!</p>" : 
                    (scorePercent >= 20) ? scoreContainer.innerHTML = "<p> Vixi... precisa estudar muito!<br> " + "Sua porcentagem é de: " + scorePercent + "%!</p>":
                    scoreContainer.innerHTML = "<p>Você errou muito!<br> " + "Sua porcentagem é de: " + scorePercent + "%! Tente novamente!</p> ";
};
