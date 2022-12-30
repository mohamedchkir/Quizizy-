let DATA;
fetch("http://localhost:3000/quiz/1")
  .then((data) => data.json())
  .then((data) => {
    DATA = data;
  })

var time = 0;
var interval;
let index = 0;
const quiz = document.querySelector('.quiz-app');
const next_btn = document.getElementById("next")
const miniteur = document.querySelector(".seconds")
const questi = document.querySelector(".count")
const lets = document.getElementById("lets")

//! submit
next_btn.addEventListener("click", function (e) {
  check()
  clearInterval(interval);
  afficher_question(DATA.questions[index]);
})

//todo timer 
function timer() {
  let seconds = 5;
  if (seconds > 0) {
    interval = setInterval(() => {
      console.log(seconds);
      miniteur.innerText = "You have" + " " + seconds;
      seconds--;
      if (seconds < 0) {
        next_btn.click();
      }
    }, 1000);
  } else {
  }
}

function afficher_question(question) {
  console.log(index);
  if (index >= 10) {
    console.log(list);
    clearInterval(interval);
    endQuiz();
    return;
  } else {
    document.querySelector('#quest-num').textContent = (index + 1) + ' / 10';
  }
  timer();
  console.log(question)
  let output = `            
            <div class="quiz-area">
            <h2>${question.content}</h2>
          </div>
          <div class="answers-area">
            <div class="answer">
              <input type="radio" id="answer-1" name="questions" value="${question.options[0].content}"/>
              <label for="answer-1">${question.options[0].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-2" name="questions"value="${question.options[1].content}" />
              <label for="answer-2">${question.options[1].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-3" name="questions" value="${question.options[2].content}"/>
              <label for="answer-3">A${question.options[2].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-4" name="questions" value="${question.options[3].content}"/>
              <label for="answer-4">${question.options[3].content}</label>
            </div>
          </div>          
          `;
  document.querySelector("#question").innerHTML = output;
  index++;
}

// a condition switch div class name in none 
const r = document.querySelector(':root');
const BTN_PLAY = document.querySelector('#btn-play');

BTN_PLAY.onclick = () => {
  r.style.setProperty('--width-stepper', '50%');
  document.querySelector('.step-2').classList.add('active');
  quiz.querySelector('.questions-guide').classList.add('none');
  quiz.querySelector('.quiz-questions').classList.remove('none');
  clearInterval(interval);
  afficher_question(DATA.questions[index]);

}

let list = []
function check() {
  let checks = document.getElementsByName('questions')
  let obj = {
    "id_quest": DATA.questions[index - 1].id,
    "id_checked": 999
  };
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked) {
      obj["id_checked"] = i + 1;
    }
  }
  list.push(obj)
  console.log(list);
}
let score = 0;
function checkAnswers() {
  let result = document.querySelector('.result');
  result.innerHTML = '';
  for (let i = 0; i < DATA.questions.length; i++) { // lister les question 
    let className = '';
    if (DATA.questions[i].answer.correct == list[i].id_checked) {
      className = 'sucess';
    } else {
      className = 'wrong'
    }
    result.innerHTML += `<div id="question">
    <div class="question">
    <p class='noAnswer'> Question: !</p>
    ${(list[i].id_checked == 999) ? "<p class='noAnswer'> No Answer !!! <br> </p>" : ''}
    </div>
    <div class="quiz-area">
      <h2>${DATA.questions[i]['content']}</h2>
    </div>
    <div class="answers-area">
      <div class="answer ${list[i].id_checked == 1 ? className : ''} ${DATA.questions[i].answer.correct == 1 ? 'sucess' : ''}">
        <p class="result-option ">${DATA.questions[i]['options'][0]['content']}</p>
      </div>
      <div class="answer ${list[i].id_checked == 2 ? className : ''} ${DATA.questions[i].answer.correct == 2 ? 'sucess' : ''}">
        <p class="result-option ">${DATA.questions[i]['options'][1]['content']}</p>
      </div>
      <div class="answer ${list[i].id_checked == 3 ? className : ''} ${DATA.questions[i].answer.correct == 3 ? 'sucess' : ''}">
        <p class="result-option ">${DATA.questions[i]['options'][2]['content']}</p>
      </div>
      <div class="answer ${list[i].id_checked == 4 ? className : ''} ${DATA.questions[i].answer.correct == 4 ? 'sucess' : ''}">
        <p class="result-option ">${DATA.questions[i]['options'][3]['content']}</p>
      </div>
      <p class="Descriptions ">${DATA.questions[i].answer.comment}</p>
      </div>
      </div>`;
  }
}

// * LA FIN DE QUIZ
function endQuiz() {
  check();
  r.style.setProperty('--width-stepper', '100%');
  document.querySelector('.step-3').classList.add('active');
  quiz.querySelector('.quiz-questions').classList.add('none');
  document.querySelector('.result').classList.remove('none');
  checkAnswers();
}

// ! USERNAME 
function getname() {
  sessionStorage.setItem("user", document.getElementById("username").value);
}
let name = sessionStorage.getItem("user");
document.getElementById("username").innerText = `Hello ` + name;



