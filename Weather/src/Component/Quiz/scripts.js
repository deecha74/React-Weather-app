const Questions = [
  {
    Question: "Which is the largest animal in the world ?",
    Answer: [
      { text: "Shark", correct: "False" },
      { text: "Elephant", correct: "False" },
      { text: "Blue Whale ", correct: "True" },
      { text: "Dog", correct: "False" },
    ],
  },
  {
    Question: "Which is the largest Bird in the world ?",
    Answer: [
      { text: "Parrot", correct: "False" },
      { text: "Ostrich", correct: "True" },
      { text: "Sparrow ", correct: "False" },
      { text: "Eagle", correct: "False" },
    ],
  },
  {
    Question: "Which is the Capital City of Nepal  ?",
    Answer: [
      { text: "Pokhara", correct: "False" },
      { text: "Melamchi", correct: "False" },
      { text: "Kathmandu ", correct: "True" },
      { text: "Biratnagar", correct: "False" },
    ],
  },
];

const QuestionElement = document.querySelector(".Question");
const AnswerElement = document.querySelector(".Answer");
const Next = document.querySelector(".Next");

const CurrentQuestionIndex = 0;
const score = 0;

function StartQuiz() {
  CurrentQuestionIndex = 0;
  score = 0;
  Next.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = Questions[CurrentQuestionIndex];
  const QuestionNo = currentQuestion + 1;
  QuestionElement.innerHTML = QuestionNo + "." + currentQuestion.Question;

  currentQuestion.Answer.forEach((answer) => {
    const button = document.querySelector("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    AnswerElement.appendChild(button);
  });
}

function resetState() {
  Next.style.display = "none";
}

export default Questions;
