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

// console.log(miniteur)

// function timer() {

//     if (time == 30) {
//         clearInterval(interval)
//         next_btn.click();

//     } else {
//         time++;
//         miniteur.innerText = time;
//     }
// }

// submit
next_btn.addEventListener("click", function (e) {
  check()
  clearInterval(interval);
  afficher_question(DATA.questions[index]);


  // e.preventDefault();
  // time = 0;
  // clearInterval(interval)
  // interval = setInterval(timer, 1000);
})

function timer() {
  let seconds = 5;

  // timer 
  if (seconds > 0) {
    interval = setInterval(() => {
      console.log(seconds);
      miniteur.innerText = "You have" + " " + seconds;
      seconds--;



      if (seconds < 0) {
        clearInterval(interval);


        afficher_question(DATA.questions[index]);
      }
    }, 1000);
  } else {

  }
}





function addtohtml(data) {
  console.log(data)

  // data.forEach(ele => {

  //     ele.questions.forEach((qst) => {
  //         let temp = `
  //         <h3>${qst.content}</h3>
  //         <p>${qst.options[0].content}</p>
  //         <p>${qst.options[1].content}</p>
  //         <p>${qst.options[2].content}</p>
  //         <p>${qst.options[3].content}</p>
  //         `
  //         output += temp
  //     })

  // });
  // let index = 0;

}




function afficher_question(question) {

  console.log(index);
  // check index == 10 
  if (index >= 10) {
    console.log(list);
    clearInterval(interval);
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


document.querySelector('#lets').onclick = () => {
  console.log('gg');
  window.location = "index1.html";
}


function starQuiz(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  document.getElementById("username").innerHTML = `Hello ${username}`;

  if (username = "") {
    document.getElementById("empty-input").innerHTML = "Please Enter your Username";

  }
}



// a condition switch div class namein none 
const r = document.querySelector(':root');
const BTN_PLAY = document.querySelector('#btn-play');
const letgo = document.querySelector(".lets")


BTN_PLAY.onclick = () => {

  r.style.setProperty('--width-stepper', '50%');
  document.querySelector('.step-2').classList.add('active');
  quiz.querySelector('#guide').classList.add('none');
  quiz.querySelector('.quiz-questions').classList.remove('none');

  clearInterval(interval);
  afficher_question(DATA.questions[index]);
}





let list = []
function check() {
  console.log(index + 'fffff');
  let val
  let checks = document.getElementsByName('questions')


  for (let i = 0; i < checks.length; i++) {

    if (checks[i].checked) {


      list.push({
        "id-quest": DATA.questions[index - 1].id,
        "id-checked": i + 1
      })

    }

  }
  console.log(list);

}