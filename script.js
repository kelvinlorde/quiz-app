// ---------- Question Bank ----------
const questionBank = [
  {
    question: "What does CSS stand for?",
    choices: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: 1
  },
  {
    question: "Which language provides structure to a webpage?",
    choices: ["Java", "CSS", "HTML", "Python"],
    correctAnswer: 2
  },
  {
    question: "Which keyword declares a constant in JavaScript?",
    choices: ["var", "let", "const", "static"],
    correctAnswer: 2
  },
  {
    question: "Which HTML element is used for the largest heading?",
    choices: ["<h6>", "<head>", "<h1>", "<header>"],
    correctAnswer: 2
  },
  {
    question: "What does the acronym 'DOM' stand for?",
    choices: [
      "Document Object Model",
      "Data Object Mapping",
      "Digital Output Module",
      "Dynamic Object Method"
    ],
    correctAnswer: 0
  }
];

// ---------- DOM References ----------
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const progressEl = document.getElementById("progress");
const questionTextEl = document.getElementById("question-text");
const choicesEl = document.getElementById("choices");
const scoreDisplayEl = document.getElementById("score-display");
const resultMessageEl = document.getElementById("result-message");

// ---------- State ----------
let currentQuestionIndex = 0;
let score = 0;
let selectedChoiceIndex = null;

// ---------- Screen Management ----------
function showScreen(screen) {
  [startScreen, quizScreen, resultsScreen].forEach((s) => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

// ---------- Quiz Logic ----------
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedChoiceIndex = null;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  const current = questionBank[currentQuestionIndex];
  selectedChoiceIndex = null;

  // Progress indicator
  progressEl.textContent = `Question ${currentQuestionIndex + 1} of ${questionBank.length}`;

  // Question text
  questionTextEl.textContent = current.question;

  // Clear + render choices
  choicesEl.innerHTML = "";
  current.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => selectChoice(index));
    choicesEl.appendChild(btn);
  });

  // Reset Next button
  nextBtn.disabled = true;
  nextBtn.textContent = "Next";
}

function selectChoice(index) {
  selectedChoiceIndex = index;

  // Clear previous highlight
  Array.from(choicesEl.children).forEach((btn) => btn.classList.remove("selected"));

  // Highlight selected
  choicesEl.children[index].classList.add("selected");

  // Enable Next
  nextBtn.disabled = false;
}

function handleNext() {
  if (selectedChoiceIndex === null) return;

  // Score check
  const current = questionBank[currentQuestionIndex];
  if (selectedChoiceIndex === current.correctAnswer) {
    score += 1;
  }

  // Advance
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questionBank.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  showScreen(resultsScreen);

  scoreDisplayEl.textContent = `You scored ${score} / ${questionBank.length}!`;

  const percent = score / questionBank.length;
  let message;
  if (percent === 1) {
    message = "Perfect score — outstanding work! 🏆";
  } else if (percent >= 0.8) {
    message = "Excellent job — you really know your stuff! 🎉";
  } else if (percent >= 0.5) {
    message = "Nice work! A little more practice and you'll ace it. 👍";
  } else {
    message = "Keep practicing — you'll get there! 💪";
  }
  resultMessageEl.textContent = message;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedChoiceIndex = null;
  showScreen(startScreen);
}

// ---------- Event Listeners ----------
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartQuiz);