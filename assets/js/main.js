function GetQuestios() {

    let myrequest = new XMLHttpRequest();

    myrequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    myrequest.open("GET", "data.json", true);
    myrequest.send();

}
GetQuestios();