let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true; //playerx,playerO
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
const winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetgame = () => {
  turnO = true; //vapas sa turn o ki paari
  count = 0;
  enableboxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "white";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let iswinner = checkwinner();
    if (count === 9 && !iswinner) {
      gamedraw();
    }
  });
});
const gamedraw = () => {
    msg.innerText = `game was a draw.`;
    msgcontainer.classList.remove("hide")
    disableboxes();
};

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (Winner) => {
  msg.innerText = `congratulations , winner is ${Winner}`;
  msgcontainer.classList.remove("hide");
  disableboxes();
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showWinner(pos1val);
        return true;
      }
    }
  }
};


newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
