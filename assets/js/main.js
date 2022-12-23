let DATA;

fetch("http://localhost:3000/quiz/1")
    .then((data) => data.json())
    .then((data) => {
        DATA = data;
    })

var time = 0;
var interval;
let index = 0;
const next_btn = document.getElementById("next")
console.log(next_btn)
const miniteur = document.querySelector(".seconds")
const questi = document.querySelector(".count")

console.log(miniteur)

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

    clearInterval(interval);
    afficher_question(DATA.questions[index]);
    index++;


    // e.preventDefault();
    // time = 0;
    // clearInterval(interval)
    // interval = setInterval(timer, 1000);
})

function timer() {
    let seconds = 3;

    // timer 
    if (seconds > 0) {
        interval = setInterval(() => {
            console.log(seconds);
            miniteur.innerText = "You have" + " " + seconds + " " + "To answer to the question";
            seconds--;



            if (seconds <= 0) {
                clearInterval(interval);
                index++;

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


    // check index == 10 
    if (index == 10) {
        clearInterval(interval);
        return;
    }
    timer();
    console.log(question)
    let output = `
            
            <div class="quiz-area">
            <h2>${question.content}</h2>
          </div>
          <div class="answers-area">
            <div class="answer">
              <input type="radio" id="answer-1" name="questions" />
              <label for="answer-1">${question.options[0].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-2" name="questions" />
              <label for="answer-2">${question.options[1].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-3" name="questions" />
              <label for="answer-3">A${question.options[2].content}</label>
            </div>
            <div class="answer">
              <input type="radio" id="answer-4" name="questions" />
              <label for="answer-4">${question.options[3].content}</label>
            </div>
          </div>
    
          
          `;

    document.querySelector("#question").innerHTML = output;
}