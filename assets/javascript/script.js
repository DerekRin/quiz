//Create a button that starts a quiz [X]
//Create a timer of 2 mins for the quiz overall []
//Create ten mutiple choice questions [X]
//Create a score function that adds or subtract []
//Create a local storage that stores name and scores []



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function bulidQuiz(){}
function showResults(){}
var myfunc = setInterval(function() {
submitButton.addEventListener('click', showResults);
    }, 1000)

const myQuestions = [
    {
    question: "In greek mythology who is the god of death?",
    answers: {
        a: "Hades",
        b: "Thanatos",
        c: "Nyx",
        d: "Pluto"
    },
    correctAnswer: "b"
    },     
    {
    question: "Which mythology does the Kraken come from?",
    answers: {
        a: "Celtic",
        b: "Greek",
        c: "Norse",
        d: "Egyptian"
    },
    correctAnswer: "c"
    },
    {
    question: "Which mythology does ragnarok appear in?",
    answers: {
        a: "Roman",
        b: "Celtic",
        c: "Norse",
        d: "Egyptian"
    },
    correctAnswer: "c"
    },
    {
    question: "Which mythology DOES NOT have a world egg myth?",
    answers: {
        a: "Greek",
        b: "Egyptian",
        c: "Norse",
        d: "Hindu"
    },
    correctAnswer: "c"
    },
    {
    question: "What mythology did the term magic come from?",
    answers: {
        a: "Hindu",
        b: "Egyptian",
        c: "Celtic",
        d: "Zoroastrianism"
    },
    correctAnswer: "d"
    },
    {
    question: "Which is NOT a child of Loki?",
    answers: {
        a: "Sleipnir",
        b: "Grendel",
        c: "Fenrir",
        d: "Hel"
    },
    correctAnswer: "b"
    },
    {
    question: "Which knight sought the Holy Grail in Arthurian legend?",
    answers: {
        a: "Mordred",
        b: "Arthur",
        c: "Lancelot",
        d: "Galahad"
    },
    correctAnswer: "d"
    },
    {
    question: "Which of the following is not a Zoroastrian figure?",
    answers: {
        a: "Monad",
        b: "Ahriman",
        c: "Anahita",
        d: "Ahura Mazda"
    },
    correctAnswer: "a"
    },    
    {
    question: "Which god slayed Yamata-no-Orochi?",
    answers: {
        a: "Izanagi-no-Mikoto",
        b: "Ebisu",
        c: "Fūjin",
        d: "Susano-o"
    },
    correctAnswer: "d"
    },  
    {
    question: "Who was the first hero?",
    answers: {
        a: "Izanagi-no-Mikoto",
        b: "Herakles",
        c: "Gilgamesh",
        d: "Sedna"
    },
    correctAnswer: "c"
    },  
];



function persistInput(input) {  
    var key = "input-" + input.id;
    var storedValue = localStorage.getItem(key);

    if (storedValue) input.value = storedValue;
    input.addEventListener('input', function() {
        localStorage.setItem(key, input.value);
    });
    console.log(input);
    input.preventDefault;
}