let playersContainer = document.querySelector(".players-container");
let seperator = document.querySelector(".seperator");
let playerOne = document.querySelector(".player-one");
let playerOneBtn = document.querySelector(".player-1-btn");
let playerTwo = document.querySelector(".player-two");
let playerTwoBtn = document.querySelector(".player-2-btn");
let resetBtn = document.querySelector(".reset-btn");
let nextBtn = document.querySelector(".next-btn");
let btnSection = document.querySelector(".buttons-section");
let playerOneActive = document.querySelector(".player-one-active");
let playerTwoActive = document.querySelector(".player-two-active");

let playerOneRounds = document.querySelector("#playerOneRounds");
let playerTwoRounds = document.querySelector("#playerTwoRounds");
let pOneRounds = 0;
let pTwoRounds = 0;

let counter = document.querySelector(".counter");
let totalCounter = 0;

let playerOneMoney = document.querySelector("#playerOneMoney");
let playerTwoMoney = document.querySelector("#playerTwoMoney");
let pOneMoney = 0;
let pTwoMoney = 0;

let playerOneName = document.querySelector("#playerOne");
let playerTwoName = document.querySelector("#playerTwo");
let playerOneNameInput = document.querySelector('[name="playerOne"]')
let playerTwoNameInput = document.querySelector('[name="playerTwo"]')

let editBtn = document.querySelector(".edit-btn");
let doneBtn = document.querySelector(".done-btn");
let modal = document.querySelector(".modal");

function counterFunc() {
    if ((pOneRounds + pTwoRounds) === 0){
        totalCounter = 0;
        return totalCounter;
    } else if ((pOneRounds + pTwoRounds) % 2 === 0) {
        totalCounter++;
        counter.innerHTML = totalCounter;
        return totalCounter;
    } else {
        return totalCounter;
    }
}

playerOneBtn.addEventListener('click', function() {
    playerTwo.classList.add("inactive");
    playerOne.classList.remove("inactive");
    nextBtn.innerHTML = 'next host';

    counterFunc();

    pOneRounds = pOneRounds+1;
    if(pOneRounds <= 1){
        playerOneRounds.innerHTML = `// ${pOneRounds} TURN`;
    } else {
        playerOneRounds.innerHTML = `// ${pOneRounds} TURNS`;
    }
    
    pTwoMoney = pTwoMoney + 1940000;
    playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

    playerOneActive.classList.remove("hidden");
    playerTwoActive.classList.add("hidden")

    document.getElementById('clickSound').play();
});

playerTwoBtn.addEventListener('click', function() {
    playerOne.classList.add("inactive");
    playerTwo.classList.remove("inactive");
    nextBtn.innerHTML = 'next host';

    counterFunc();

    pTwoRounds = pTwoRounds+1;
    if(pTwoRounds <= 1){
        playerTwoRounds.innerHTML = `// ${pTwoRounds} TURN`;
    } else {
        playerTwoRounds.innerHTML = `// ${pTwoRounds} TURNS`;
    }

    pOneMoney = pOneMoney + 1940000;
    playerOneMoney.innerHTML = `// $${pOneMoney}`;

    playerTwoActive.classList.remove("hidden");
    playerOneActive.classList.add("hidden");

    document.getElementById('clickSound').play();
});

reset = () => {
    playerOne.classList.remove("inactive");
    playerTwo.classList.remove("inactive")
    document.getElementById('doneSound').play();
};

document.body.onkeyup = () => {
    if(e.keyCode == 32){
        startHost();
    }
    
}

nextBtn.addEventListener('click', () => {
    startHost();
});

function startHost() {
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;

    nextBtn.innerHTML = 'next host';

    counterFunc();
    console.log(totalCounter);

    if (playerOne.classList.contains("inactive")) {
        playerOne.classList.remove("inactive");
        playerTwo.classList.add("inactive");

        pOneRounds = pOneRounds+1;
        if(pOneRounds <= 1){
            playerOneRounds.innerHTML = `// ${pOneRounds} TURN`;
        } else {
            playerOneRounds.innerHTML = `// ${pOneRounds} TURNS`;
        }

        pTwoMoney = pTwoMoney + 1940000;
        playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

        playerOneActive.classList.remove("hidden");
        playerTwoActive.classList.add("hidden");

    } else if (playerTwo.classList.contains("inactive")) {
        playerOne.classList.add("inactive");
        playerTwo.classList.remove("inactive");

        pTwoRounds = pTwoRounds+1;
        if(pOneRounds <= 1){
            playerTwoRounds.innerHTML = `// ${pTwoRounds} TURN`;
        } else {
            playerTwoRounds.innerHTML = `// ${pTwoRounds} TURNS`;
        }
    
        pOneMoney = pOneMoney + 1940000;
        playerOneMoney.innerHTML = `// $${pOneMoney}`;

        playerTwoActive.classList.remove("hidden");
        playerOneActive.classList.add("hidden");

    } else if (!playerOne.classList.contains("inactive") && !playerTwo.classList.contains("inactive")) {
        playerTwo.classList.add("inactive");

        pOneRounds = pOneRounds+1;
        if(pOneRounds <= 1){
            playerOneRounds.innerHTML = `// ${pOneRounds} TURN`;
        } else {
            playerOneRounds.innerHTML = `// ${pOneRounds} TURNS`;
        }

        pTwoMoney = pTwoMoney + 1940000;
        playerTwoMoney.innerHTML = `// $${pTwoMoney}`;

        playerOneActive.classList.remove("hidden");
        playerTwoActive.classList.add("hidden");
    }

    document.getElementById('clickSound').play();
}

// ! --------------- MODAL  --------------- 

editBtn.addEventListener('click', function() {
    modal.classList.toggle("hidden");
    playerOne.classList.toggle("hidden");
    playerTwo.classList.toggle("hidden");
    seperator.classList.toggle("hidden");
    btnSection.classList.toggle("hidden");
})

doneBtn.addEventListener('click', function() {
    modal.classList.add("hidden");
    playerOne.classList.toggle("hidden");
    playerTwo.classList.toggle("hidden");
    seperator.classList.toggle("hidden");
    btnSection.classList.toggle("hidden");
    playerOneName.innerHTML = playerOneNameInput.value;
    playerTwoName.innerHTML = playerTwoNameInput.value;
})


// TODO --------------- LocalStorage ---------------

