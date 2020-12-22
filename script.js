//catch the dom
let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score");
const scroeborad_div = document.querySelector("score-board");
let res_p = document.getElementById("result1");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getcompchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = (Math.floor(Math.random() * 3));
    return choices[randomnumber];
}
function convert(letter) {
    if (letter == "r") {
        return "Rock";
    }
    else if (letter == "s") {
        return "Scissor";
    }
    else {
        return "Paper";
    }
}
function win(userchoice, computerchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = computerscore
    // console.log(userchoice);
    // console.log(computerchoice)
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "comp".fontsize(3).sup();
    res_p.innerHTML = convert(userchoice) + smallworduser + " beat " + convert(computerchoice) + smallwordcomp + " you win 🔥!!"
}
function lose(userchoice,computerchoice) {
    computerscore++;
   
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = computerscore
    // console.log(userchoice);
    // console.log(computerchoice)
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "comp".fontsize(3).sup();
    res_p.innerHTML = convert(userchoice) + smallworduser + " lose to " + convert(computerchoice) + smallwordcomp + " you lost💩!"
}
function draw(userchoice,computerchoice) {
   
    
    
    // console.log(userchoice);
    // console.log(computerchoice)
    const smallworduser = "user".fontsize(3).sup();
    const smallwordcomp = "comp".fontsize(3).sup();
    res_p.innerHTML = convert(userchoice) + smallworduser + " equal to " + convert(computerchoice) + smallwordcomp + " It's draw!"
}

function game(userchoice) {
    const compchoice = getcompchoice();

    console.log("comp choice=>" + compchoice);
    console.log("user choice=>" + userchoice);
    switch (userchoice + compchoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userchoice, compchoice);

            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userchoice, compchoice);

            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userchoice, compchoice);

            break;

    }

}
function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    })
    paper_div.addEventListener("click", function () {
        game("p")
    })
    scissor_div.addEventListener("click", function () {
        game("s")
    })
}
main();
