let boxes = document.querySelectorAll(".box");
const restart = document.querySelector("#restart-btn");
let msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");

let winningPattern = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]];

turnX = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const checkWinner = () => {
    for (let pattern of winningPattern) {
        const pos1value = boxes[pattern[0]].innerText;
        const pos2value = boxes[pattern[1]].innerText;
        const pos3value = boxes[pattern[2]].innerText;

        // console.log(pos1value, pos2value, pos3value);

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {
                console.log("Winner", pos1value);
                showWinner(pos1value);
            }
        }
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

