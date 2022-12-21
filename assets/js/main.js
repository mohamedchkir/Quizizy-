fetch("http://localhost:3000/quiz")
    .then((data) => data.json())
    .then((data) => addtohtml(data))


function addtohtml(data) {
    let output = "";
    data.forEach(ele => {
        ele.questions.forEach((qst) => {
            let temp = `
            <h3>${qst.content}</h3>
            <p>${qst.options[0].content}</p>
            `
            output += temp
        })
    });
    document.body.innerHTML += output
}