let playerOne = document.querySelector(".player-one");
let playerOneBtn = document.querySelector(".player-1-btn");
let playerTwo = document.querySelector(".player-two");
let playerTwoBtn = document.querySelector(".player-2-btn");
let resetBtn = document.querySelector(".reset-btn");
let nextBtn = document.querySelector(".next-btn");
let playerOneActive = document.querySelector(".player-one-active");
let playerTwoActive = document.querySelector(".player-two-active");

let playerOneRounds = document.querySelector("#playerOneRounds");
let playerTwoRounds = document.querySelector("#playerTwoRounds");
let pOneRounds = 0;
let pTwoRounds = 0;

let playerOneMoney = document.querySelector("#playerOneMoney");
let playerTwoMoney = document.querySelector("#playerTwoMoney");
let pOneMoney = 0;
let pTwoMoney = 0;

playerOneBtn.addEventListener('click', function() {
    playerTwo.classList.add("inactive");
    playerOne.classList.remove("inactive");

    pOneRounds = pOneRounds+1;
    playerOneRounds.innerHTML = `// ${pOneRounds} ROUNDS`;

    pTwoMoney = pTwoMoney + 1940000;
    playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

    playerOneActive.classList.remove("hidden");
    playerTwoActive.classList.add("hidden")

    document.getElementById('clickSound').play();
});

playerTwoBtn.addEventListener('click', function() {
    playerOne.classList.add("inactive");
    playerTwo.classList.remove("inactive");

    pTwoRounds = pTwoRounds+1;
    playerTwoRounds.innerHTML = `${pTwoRounds} ROUNDS`;

    pOneMoney = pOneMoney + 1940000;
    playerOneMoney.innerHTML = `// $${pOneMoney}`;

    playerTwoActive.classList.remove("hidden");
    playerOneActive.classList.add("hidden");

    document.getElementById('clickSound').play();
});

resetBtn.addEventListener('click', function() {
    playerOne.classList.remove("inactive");
    playerTwo.classList.remove("inactive")
    document.getElementById('doneSound').play();
});

nextBtn.addEventListener('click', function() {
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;

    if (playerOne.classList.contains("inactive")) {
        playerOne.classList.remove("inactive");
        playerTwo.classList.add("inactive");

        pOneRounds = pOneRounds+1;
        playerOneRounds.innerHTML = `// ${pOneRounds} ROUNDS`;

        pTwoMoney = pTwoMoney + 1940000;
        playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

        playerOneActive.classList.remove("hidden");
        playerTwoActive.classList.add("hidden");

    } else if (playerTwo.classList.contains("inactive")) {
        playerOne.classList.add("inactive");
        playerTwo.classList.remove("inactive");

        pTwoRounds = pTwoRounds+1;
        playerTwoRounds.innerHTML = `${pTwoRounds} ROUNDS`;
    
        pOneMoney = pOneMoney + 1940000;
        playerOneMoney.innerHTML = `// $${pOneMoney}`;

        playerTwoActive.classList.remove("hidden");
        playerOneActive.classList.add("hidden");

    } else if (!playerOne.classList.contains("inactive") && !playerTwo.classList.contains("inactive")) {
        playerTwo.classList.add("inactive");

        pOneRounds = pOneRounds+1;
        playerOneRounds.innerHTML = `// ${pOneRounds} ROUNDS`;

        pTwoMoney = pTwoMoney + 1940000;
        playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

        playerOneActive.classList.remove("hidden");
        playerTwoActive.classList.add("hidden");
    }

    document.getElementById('clickSound').play();
});


// ! MODAL 

// ! CUSTOM NAMES
let playerOneName = document.querySelector("#playerOne");
let playerTwoName = document.querySelector("#playerTwo");
let playerOneNameInput = document.querySelector('[name="playerOne"]')
let playerTwoNameInput = document.querySelector('[name="playerTwo"]')

let editBtn = document.querySelector(".edit-btn");
let doneBtn = document.querySelector(".done-btn");
let modal = document.querySelector(".modal");

editBtn.addEventListener('click', function() {
    modal.classList.remove("hidden");
})

doneBtn.addEventListener('click', function() {
    modal.classList.add("hidden");
    playerOneName.innerHTML = playerOneNameInput.value;
    playerTwoName.innerHTML = playerTwoNameInput.value;
})




