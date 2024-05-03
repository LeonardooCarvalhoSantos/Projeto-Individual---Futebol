// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: 'Quando foi fundado o Santos Futebol Clube?',
    answers: [
      {
        answer: '1912',
        correct: true,
      },
      {
        answer: '1923',
        correct: false,
      },
      {
        answer: '1910',
        correct: false,
      },
      {
        answer: '1909',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual jogador é conhecido como o maior ídolo da história do Santos?',
    answers: [
      {
        answer: 'Pelé',
        correct: true,
      },
      {
        answer: 'Neymar',
        correct: false,
      },
      {
        answer: 'Robinho',
        correct: false,
      },
      {
        answer: 'Zito',
        correct: false,
      },
    ],
  },
  {
    question: 'Quantas vezes o Santos conquistou a Copa Libertadores da América?',
    answers: [
      {
        answer: '1',
        correct: false,
      },
      {
        answer: '2',
        correct: false,
      },
      {
        answer: '3',
        correct: true,
      },
      {
        answer: '4',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual foi o treinador responsável pela chamada "Era de Ouro" do Santos na década de 1960?',
    answers: [
      {
        answer: 'Oswaldo Brandão',
        correct: false,
      },
      {
        answer: 'Vanderlei Luxemburgo',
        correct: false,
      },
      {
        answer: 'Muricy Ramalho',
        correct: false,
      },
      {
        answer: 'Lula',
        correct: true,
      },
    ],
  },
  {
    question: 'Qual estádio é conhecido como a casa do Santos?',
    answers: [
      {
        answer: 'Morumbi',
        correct: false,
      },
      {
        answer: 'Vila Belmiro',
        correct: true,
      },
      {
        answer: 'Pacaembu',
        correct: false,
      },
      {
        answer: 'Maracanã',
        correct: false,
      },
    ],
  },
  {
    question: 'Em que ano ocorreu o primeiro jogo internacional de futebol?',
    answers: [
      {
        answer: '1863',
        correct: false,
      },
      {
        answer: '1872',
        correct: true,
      },
      {
        answer: '1904',
        correct: false,
      },
      {
        answer: '1910',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual país venceu a primeira Copa do Mundo de Futebol, realizada em 1930?',
    answers: [
      {
        answer: 'Brasil',
        correct: false,
      },
      {
        answer: 'Argentina',
        correct: false,
      },
      {
        answer: 'Itália',
        correct: false,
      },
      {
        answer: 'Uruguai',
        correct: true,
      },
    ],
  },
  {
    question: 'Em que país foi fundada a FIFA (Fédération Internationale de Football Association)?',
    answers: [
      {
        answer: 'Inglaterra',
        correct: false,
      },
      {
        answer: 'França',
        correct: false,
      },
      {
        answer: 'Suíça',
        correct: true,
      },
      {
        answer: 'Alemanha',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual foi o país anfitrião da primeira Copa do Mundo de Futebol Feminino, em 1991?',
    answers: [
      {
        answer: 'Estados Unidos',
        correct: true,
      },
      {
        answer: 'China',
        correct: false,
      },
      {
        answer: 'Suécia',
        correct: false,
      },
      {
        answer: 'Canadá',
        correct: false,
      },
    ],
  },
  {
    question: 'Qual jogador ficou famoso pelo gol chamado "mão de Deus" na Copa do Mundo de 1986?',
    answers: [
      {
        answer: 'Zico',
        correct: false,
      },
      {
        answer: 'Johan Cruyff',
        correct: false,
      },
      {
        answer: 'Franz Beckenbauer',
        correct: false,
      },
      {
        answer: 'Diego Maradona',
        correct: true,
      },
    ],
  },
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
