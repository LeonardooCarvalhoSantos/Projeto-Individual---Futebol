// declaração de variáveis
const question = document.querySelector('#question'); // Seleciona o elemento com id 'question' para exibir a pergunta
const answerBox = document.querySelector('#answers-box'); // Seleciona o elemento com id 'answers-box' para exibir as respostas
const quizzContainer = document.querySelector('#quizz-container'); // Seleciona o elemento com id 'quizz-container' que contém o quiz
const scoreContainer = document.querySelector('#score-container'); // Seleciona o elemento com id 'score-container' que contém a pontuação
const letters = ['a', 'b', 'c', 'd', 'e']; // Array de letras para identificação das respostas
let points = 0; // Variável para armazenar a pontuação do usuário
let actualQuestion = 0; // Variável para armazenar o índice da pergunta atual
let idUsuario = sessionStorage.ID_USUARIO // Recupera o ID do usuário do sessionStorage

// perguntas
const questions = [
  {
    question: 'Quando foi fundado o Santos Futebol Clube?', // Pergunta 1
    answers: [
      {
        answer: '1912', // Resposta 1a
        correct: true, // Resposta correta
      },
      {
        answer: '1923', // Resposta 1b
        correct: false, // Resposta incorreta
      },
      {
        answer: '1910', // Resposta 1c
        correct: false, // Resposta incorreta
      },
      {
        answer: '1909', // Resposta 1d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Qual jogador é conhecido como o maior ídolo da história do Santos?', // Pergunta 2
    answers: [
      {
        answer: 'Pelé', // Resposta 2a
        correct: true, // Resposta correta
      },
      {
        answer: 'Neymar', // Resposta 2b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Robinho', // Resposta 2c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Zito', // Resposta 2d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Quantas vezes o Santos conquistou a Copa Libertadores da América?', // Pergunta 3
    answers: [
      {
        answer: '1', // Resposta 3a
        correct: false, // Resposta incorreta
      },
      {
        answer: '2', // Resposta 3b
        correct: false, // Resposta incorreta
      },
      {
        answer: '3', // Resposta 3c
        correct: true, // Resposta correta
      },
      {
        answer: '4', // Resposta 3d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Qual foi o treinador responsável pela chamada "Era de Ouro" do Santos na década de 1960?', // Pergunta 4
    answers: [
      {
        answer: 'Oswaldo Brandão', // Resposta 4a
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Vanderlei Luxemburgo', // Resposta 4b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Muricy Ramalho', // Resposta 4c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Lula', // Resposta 4d
        correct: true, // Resposta correta
      },
    ],
  },
  {
    question: 'Qual estádio é conhecido como a casa do Santos?', // Pergunta 5
    answers: [
      {
        answer: 'Morumbi', // Resposta 5a
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Vila Belmiro', // Resposta 5b
        correct: true, // Resposta correta
      },
      {
        answer: 'Pacaembu', // Resposta 5c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Maracanã', // Resposta 5d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Em que ano ocorreu o primeiro jogo internacional de futebol?', // Pergunta 6
    answers: [
      {
        answer: '1863', // Resposta 6a
        correct: false, // Resposta incorreta
      },
      {
        answer: '1872', // Resposta 6b
        correct: true, // Resposta correta
      },
      {
        answer: '1904', // Resposta 6c
        correct: false, // Resposta incorreta
      },
      {
        answer: '1910', // Resposta 6d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Qual país venceu a primeira Copa do Mundo de Futebol, realizada em 1930?', // Pergunta 7
    answers: [
      {
        answer: 'Brasil', // Resposta 7a
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Argentina', // Resposta 7b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Itália', // Resposta 7c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Uruguai', // Resposta 7d
        correct: true, // Resposta correta
      },
    ],
  },
  {
    question: 'Em que país foi fundada a FIFA (Fédération Internationale de Football Association)?', // Pergunta 8
    answers: [
      {
        answer: 'Inglaterra', // Resposta 8a
        correct: false, // Resposta incorreta
      },
      {
        answer: 'França', // Resposta 8b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Suíça', // Resposta 8c
        correct: true, // Resposta correta
      },
      {
        answer: 'Alemanha', // Resposta 8d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Qual foi o país anfitrião da primeira Copa do Mundo de Futebol Feminino, em 1991?', // Pergunta 9
    answers: [
      {
        answer: 'Estados Unidos', // Resposta 9a
        correct: true, // Resposta correta
      },
      {
        answer: 'China', // Resposta 9b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Suécia', // Resposta 9c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Canadá', // Resposta 9d
        correct: false, // Resposta incorreta
      },
    ],
  },
  {
    question: 'Qual jogador ficou famoso pelo gol chamado "mão de Deus" na Copa do Mundo de 1986?', // Pergunta 10
    answers: [
      {
        answer: 'Zico', // Resposta 10a
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Johan Cruyff', // Resposta 10b
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Franz Beckenbauer', // Resposta 10c
        correct: false, // Resposta incorreta
      },
      {
        answer: 'Diego Maradona', // Resposta 10d
        correct: true, // Resposta correta
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0); // Chama a função createQuestion para criar a primeira pergunta
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button'); // Seleciona todos os botões de resposta anteriores
  oldButtons.forEach((btn) => {
    btn.remove(); // Remove todos os botões de resposta anteriores
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text'); // Seleciona o elemento com id 'question-text' para alterar o texto da pergunta
  const questionNumber = question.querySelector('#question-number'); // Seleciona o elemento com id 'question-number' para alterar o número da pergunta

  questionText.textContent = questions[i].question; // Define o texto da pergunta atual
  questionNumber.textContent = i + 1; // Define o número da pergunta atual

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true); // Clona o template de resposta

    const letterBtn = answerTemplate.querySelector('.btn-letter'); // Seleciona o elemento com a classe 'btn-letter'
    const answerText = answerTemplate.querySelector('.question-answer'); // Seleciona o elemento com a classe 'question-answer'

    letterBtn.textContent = letters[i]; // Define a letra da resposta
    answerText.textContent = answer['answer']; // Define o texto da resposta

    answerTemplate.setAttribute('correct-answer', answer['correct']); // Define o atributo 'correct-answer' com base se a resposta está correta ou não

    // remover hide e template class
    answerTemplate.classList.remove('hide'); // Remove a classe 'hide' do template de resposta
    answerTemplate.classList.remove('answer-template'); // Remove a classe 'answer-template' do template de resposta

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate); // Adiciona o template de resposta ao 'answerBox'

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this); // Adiciona um evento de clique ao template de resposta para verificar a resposta
    });
  });

  // incrementar o número da questão
  actualQuestion++; // Incrementa o número da questão atual
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button'); // Seleciona todos os botões de resposta

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer'); // Adiciona a classe 'correct-answer' ao botão correto

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++; // Incrementa a pontuação do usuário se a resposta estiver correta
      }
    } else {
      button.classList.add('wrong-answer'); // Adiciona a classe 'wrong-answer' aos botões incorretos
    }
  });

  // exibir próxima pergunta
  nextQuestion(); // Chama a função nextQuestion para exibir a próxima pergunta
}

// exibe a próxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage(); // Chama a função showSuccessMessage se não houver mais perguntas
      return;
    }

    createQuestion(actualQuestion); // Chama a função createQuestion para criar a próxima pergunta
  }, 1200); // Define um timer de 1200ms antes de exibir a próxima pergunta
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz(); // Chama a função hideOrShowQuizz para esconder o quiz e mostrar a pontuação

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2); // Calcula a pontuação do usuário
  // d.innerHTML = score

  const displayScore = document.querySelector('#display-score span'); // Seleciona o elemento que exibe a pontuação
  displayScore.textContent = score.toString(); // Define o texto da pontuação calculada

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers'); // Seleciona o elemento que exibe o número de respostas corretas
  correctAnswers.textContent = points; // Define o texto com o número de respostas corretas

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty'); // Seleciona o elemento que exibe o total de perguntas
  totalQuestions.textContent = questions.length; // Define o texto com o total de perguntas

  fetch("/quiz/cadastrar", {
    method: "POST", // Define o método HTTP como POST
    headers: {
      "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      usuarioIdserver: idUsuario, // Atribui o ID do usuário ao atributo 'usuarioIdserver'
      scoreServer: points // Atribui a pontuação ao atributo 'scoreServer'
    }),
  })
  .then(function (resposta) {
    console.log("resposta: ", resposta); // Exibe a resposta no console

    if (resposta.ok) {
      setTimeout(() => {
        window.location = "dashboard.html"; // Redireciona para a página do dashboard após 1000ms
      }, "1000");
    } else {
      throw "Houve um erro ao tentar realizar o cadastro!"; // Lança um erro se a resposta não estiver OK
    }
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`); // Exibe o erro no console
  });
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide'); // Alterna a classe 'hide' no 'quizzContainer'
  scoreContainer.classList.toggle('hide'); // Alterna a classe 'hide' no 'scoreContainer'
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart'); // Seleciona o botão de reiniciar com id 'restart'
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0; // Reseta o índice da pergunta atual
  points = 0; // Reseta a pontuação do usuário
  hideOrShowQuizz(); // Chama a função hideOrShowQuizz para mostrar o quiz e esconder a pontuação
  init(); // Chama a função init para iniciar o quiz
});

// inicialização do quizz
init(); // Chama a função init para iniciar o quiz