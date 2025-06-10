let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"] // 3 options for computer
    const randidx = Math.floor(Math.random()* 3);
    return options[randidx];
}
const drawgame = () => {
    console.log("game was juri dirty");
    msg.innerText = "game was draw was juri dirty ";
    msg.style.backgroundColor = "orange";
};
const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = `you win 🎉🎉🎉🎈 ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "yellow";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("computer wins");
        msg.innerText = `computer wins 🤣  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    };
};

const playgame = (userchoice) => {
    console.log("choice was cli",userchoice);
    //generate computer choice
    const compchoice = gencompchoice();
    console.log("computer choice= ",compchoice);

    if(userchoice === compchoice){
        //draw game
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){ //scissors,paper
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){//rock scissors
            userwin = compchoice === "scissors" ? false : true;
        } else { //rock paper
            userwin = compchoice === "rock" ? false: true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) =>  {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id"); // pta chlta hai uska id
        playgame(userchoice);
    });
    
});