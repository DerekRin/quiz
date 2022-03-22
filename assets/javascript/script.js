//Create a score function that adds or subtract []
//Create a local storage that stores name and scores []

var hide = document.querySelector("#hide");
var show = document.querySelector("#show");
var startButton = document.querySelector("#start");
var display = document.querySelector("#time");
var questionIndex = 0;
var duration = 60 * 3;
var minutes = parseInt(duration / 60, 10);
var seconds = parseInt(duration % 60, 10);
var score = 0;
let name;

// var getName = function() {
//   var name = "";
//   while (name === "" || name === null)
// };

//Put timer here
function startTimer() {
  var clock = setInterval(function () {
    minutes = parseInt(duration / 60, 10);
    seconds = parseInt(duration % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
    if (duration > 0) {
      --duration;
    } else {
      clearInterval(clock);
    }
  }, 1000);
}

var start = document.querySelector(".start");
start.addEventListener("click", function () {
  name = prompt("What is your name?");
  // hide.style.display = "none";
  show.style.display = "block";
  // localStorage.setItem("data", name, score);
  startTimer();
  buildQuiz();
});

function scoreSave(userScore) {
  const highScores = JSON.parse(localStorage.getItem("highScores"));
  const saveScore = confirm(
    `Your score is ${userScore.score}! Would you like to save your score?`
  );
  if (saveScore) {
    const newHighScores = [...highScores, userScore];
    localStorage.setItem("highScores", JSON.stringify(newHighScores));
  } else {
    window.location.reload();
  }
}

var displayQuestion = function () {};

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

function buildQuiz() {
  var currentQuestion = myQuestions[questionIndex];
  show.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <ul>
    <li><button id="a" class="answer">${currentQuestion.answers.a}</button></li>
    <li><button id="b" class="answer">${currentQuestion.answers.b}</button></li>
    <li><button id="c" class="answer">${currentQuestion.answers.c}</button></li>
    <li><button id="d" class="answer">${currentQuestion.answers.d}</button></li>
    </ul>`;
  var answers = document.querySelectorAll(".answer");
  answers.forEach((answer) =>
    answer.addEventListener("click", function (event) {
      if (event.target.id === currentQuestion.correctAnswer) {
        alert("correct");
        score = score + 1;
      } else {
        duration >= 24 ? (duration -= 24) : (duration = 0);
        alert("incorrect");
      }
      questionIndex++;
      if (questionIndex < myQuestions.length) {
        buildQuiz();
      } else {
        alert("finished");
        const userScore = { name: name, score: score };
        localStorage.setItem("userScore", JSON.stringify(userScore));
        scoreSave(userScore);
      }
      console.log(event);
      console.log(score);
      console.log(name);
    })
  );
}
function showResults() {}
var myfunc = setInterval(function () {}, 1000);

const myQuestions = [
  {
    question: "In greek mythology who is the god of death?",
    answers: {
      a: "Hades",
      b: "Thanatos",
      c: "Nyx",
      d: "Pluto",
    },
    correctAnswer: "b",
  },
  {
    question: "Which mythology does the Kraken come from?",
    answers: {
      a: "Celtic",
      b: "Greek",
      c: "Norse",
      d: "Egyptian",
    },
    correctAnswer: "c",
  },
  {
    question: "Which mythology does ragnarok appear in?",
    answers: {
      a: "Roman",
      b: "Celtic",
      c: "Norse",
      d: "Egyptian",
    },
    correctAnswer: "c",
  },
  {
    question: "Which mythology DOES NOT have a world egg myth?",
    answers: {
      a: "Greek",
      b: "Egyptian",
      c: "Norse",
      d: "Hindu",
    },
    correctAnswer: "c",
  },
  {
    question: "What mythology did the term magic come from?",
    answers: {
      a: "Hindu",
      b: "Egyptian",
      c: "Celtic",
      d: "Zoroastrianism",
    },
    correctAnswer: "d",
  },
  {
    question: "Which is NOT a child of Loki?",
    answers: {
      a: "Sleipnir",
      b: "Grendel",
      c: "Fenrir",
      d: "Hel",
    },
    correctAnswer: "b",
  },
  {
    question: "Which knight sought the Holy Grail in Arthurian legend?",
    answers: {
      a: "Mordred",
      b: "Arthur",
      c: "Lancelot",
      d: "Galahad",
    },
    correctAnswer: "d",
  },
  {
    question: "Which of the following is not a Zoroastrian figure?",
    answers: {
      a: "Monad",
      b: "Ahriman",
      c: "Anahita",
      d: "Ahura Mazda",
    },
    correctAnswer: "a",
  },
  {
    question: "Which god slayed Yamata-no-Orochi?",
    answers: {
      a: "Izanagi-no-Mikoto",
      b: "Ebisu",
      c: "Fūjin",
      d: "Susano-o",
    },
    correctAnswer: "d",
  },
  {
    question: "Who was the first hero?",
    answers: {
      a: "Izanagi-no-Mikoto",
      b: "Herakles",
      c: "Gilgamesh",
      d: "Sedna",
    },
    correctAnswer: "c",
  },
];
