//Question Data 

const quizQs = [
    {
        question: 'Which MLB team won 3 World Series in the last decade?',
        a: 'Miami Marlins',
        b: 'Texas Rangers',
        c: 'San Francisco Giants',
        d: 'Houston Astros',
        correct: 'c'
    },

    {
        question: 'In which year was Twitter created?',
        a: '2006',
        b: '2001',
        c: '1993',
        d: '2020',
        correct: 'a'

    }
]

//get all elements 
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questions = document.getElementById('question')
const answer1 = document.getElementById('ans1')
const answer2 = document.getElementById('ans2')
const answer3 = document.getElementById('ans3')
const answer4 = document.getElementById('ans4')
const subButton = document.getElementById('submit')

//load questions and answers to page

let currentQuestion = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
    deselectAnswer()

    const quizData = quizQs[currentQuestion];

    questions.innerText = quizData.question;
    answer1.innerText = quizData.a;
    answer2.innerText = quizData.b;
    answer3.innerText = quizData.c;
    answer4.innerText = quizData.d;
}

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

   return answer
}


// unselect answer on new question load 
function deselectAnswer() {
    answerEls.forEach((answerEl) => { 
            answerEl.checked = false;
})

//load next question
subButton.addEventListener('click', () => {
    //check to see answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizQs[currentQuestion].correct){
            score++;
 }


        currentQuestion++;
        if (currentQuestion < quizQs.length) {
            loadQuiz()

        } else {
            quiz.innerHTML = `<h1>Not bad. You scored ${score} out of 5.</h1>`;
        }
    }
})
}
