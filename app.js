let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgBox = document.querySelector(".msg-box");
let msg = document.querySelector(".msg");
let PlayerOTurn = true;

// win patterns
const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
  ];

// reset game
const resetGame = () =>{
    PlayerOTurn = true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgBox.classList.add("hide");
    }
}
// show winner
const showWinner = (winner) =>{
    msg.innerText = `Congrulations, Winner is Player ${winner}`;
    msgBox.classList.remove("hide");
}
// check winner
const checkWinner = () =>{
    for(let pattern of winningPatterns){
        let positionOne = boxes[pattern[0]].innerText;
        let positionTwo = boxes[pattern[1]].innerText;
        let positionThree = boxes[pattern[2]].innerText;

        if(positionOne != "" && positionTwo != "" && positionThree != ""){
            if(positionOne == positionTwo && positionTwo == positionThree){
                // disabled button after winner is spotted
                for(let box of boxes){
                    box.disabled = true;
                }
                showWinner(positionOne);
            }
        }
    }
}
//reset button
resetBtn.addEventListener
boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        console.log("Button is Clicked");
        if(PlayerOTurn){
            box.innerText = "O";
            PlayerOTurn = false;
        }
        else{
            box.innerText = "X";
            PlayerOTurn = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

resetBtn.addEventListener("click", resetGame);