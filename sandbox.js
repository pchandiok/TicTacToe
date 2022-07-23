document.addEventListener('DOMContentLoaded', () => 
{
    const playerMessage = document.querySelector("#playerMessage");
    const container = document.querySelector(".container");
    const player1 = document.querySelector("#player1");
    const player2 = document.querySelector("#player2");
    const player1Choice = document.querySelector("#player1Choice");
    const player2Choice = document.querySelector("#player2Choice");
    const submit = document.querySelector("#submit");
    const details = document.querySelector(".details");
    const winningMessage = document.querySelector("#winningMessage");
    const clickBox = document.querySelectorAll(".clickBox");

    const PLAYER_X = "X";
    const PLAYER_O = "O";

    container.style.display = "none";

    let playerOne = true;

    submit.onclick = () => {
        details.style.display = "none";
        container.style.display = "grid";
        if(player1Choice.checked)
            playerOne = true;
        
        if(player2Choice.checked)
            playerOne = false;

        playerMessage.innerHTML = playerOne ? `${player1.value}, your turn` : `${player2.value}, your turn`;
    };

    const showTurn = user => {
        playerOne = !playerOne;
        playerMessage.innerHTML = playerOne ? `${player1.value}, your turn` : `${player2.value}, your turn`;
    };

    const checkWinner = () =>
    {
        let win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ];

        win.forEach(e => {
            if((clickBox[e[0]].innerText === clickBox[e[1]].innerText) && (clickBox[e[1]].innerText === clickBox[e[2]].innerText) && clickBox[e[0]].innerText !== "")
            {
                container.style.display = "none";
                winningMessage.innerHTML = playerOne ? `<h2 class="details" style="color: red;">${player1.value} is a winner</h2>` : `<h2>${player2.value} is a winner</h2>`;
            }
        });
    }

    clickBox.forEach(user => {
       user.addEventListener('click', () => {
            user.innerText = playerOne ? PLAYER_X : PLAYER_O;
            checkWinner();
            showTurn(user);
       });
    });

    document.querySelector("#reset").addEventListener("click", () => {
        clickBox.forEach(e => {
            e.innerText = "";
        });
        container.style.display = "grid";
    });
});