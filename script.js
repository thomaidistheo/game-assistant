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


// ------------------------------------------------------------------------

class Player { 
    constructor() {
        this.name = '';
        this.money = 0;
        this.turns = 0;
    }
}

let p1 = new Player();
let p2 = new Player();

populateUI();

// ------------------------------------------------------------------------

playerOneHost = () => {
    playerTwo.classList.add("inactive");
    playerOne.classList.remove("inactive");
    playerOneActive.classList.remove("hidden");
    playerTwoActive.classList.add("hidden")
    nextBtn.innerHTML = 'next host';
    document.getElementById('clickSound').play();

    p1.turns++;
    p2.money += 1940000;
   
    (p1.turns <= 1)
        ? playerOneRounds.innerHTML = `// ${p1.turns} TURN` 
        : playerOneRounds.innerHTML = `// ${p1.turns} TURNS`;
    
    playerTwoMoney.innerHTML = `// $${p2.money}`;

    setLocalStorage();
}

playerTwoHost = () => {
    playerOne.classList.add("inactive");
    playerTwo.classList.remove("inactive");
    playerTwoActive.classList.remove("hidden");
    playerOneActive.classList.add("hidden");
    nextBtn.innerHTML = 'next host';
    document.getElementById('clickSound').play();

    p2.turns++;
    p1.money += 1940000;

    (p2.turns <= 1)
    ? playerTwoRounds.innerHTML = `// ${p2.turns} TURN` 
    : playerTwoRounds.innerHTML = `// ${p2.turns} TURNS`;
    
    playerOneMoney.innerHTML = `// ${p1.money}`;

    setLocalStorage();
}

startHost = () => {
    playerOneBtn.disabled = true;
    playerTwoBtn.disabled = true;

    nextBtn.innerHTML = 'next host';

    counterFunc();

    if (playerOne.classList.contains("inactive")) {
       playerOneHost();

    } else if (playerTwo.classList.contains("inactive")) {
        playerTwoHost();

    } else if (!playerOne.classList.contains("inactive") && !playerTwo.classList.contains("inactive")) {
        playerOneHost();
    }

    document.getElementById('clickSound').play();
}

counterFunc = () => {
    if ((p1.turns + p2.turns) % 2 === 0) {
        totalCounter++;
        setLocalStorage();
        counter.innerHTML = totalCounter;
        return totalCounter;
    } else {
        return totalCounter;
    }
}

playerOneBtn.addEventListener('click', function() {
    playerOneHost();
    counterFunc();
});

playerTwoBtn.addEventListener('click', function() {
    playerTwoHost();
    counterFunc();  

});

reset = () => {
    playerOne.classList.remove("inactive");
    playerTwo.classList.remove("inactive")
    document.getElementById('doneSound').play();
    localStorage.clear()
    location.reload();
};

document.body.onkeyup = () => {
    if(e.keyCode == 32){
        startHost();
    }
    
}

nextBtn.addEventListener('click', () => {
    startHost();
});

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

    p1.name = playerOneNameInput.value;
    playerOneName.innerHTML = p1.name;
    p2.name = playerTwoNameInput.value;
    playerTwoName.innerHTML = p2.name;

    setLocalStorage();
})


// ^ --------------- LocalStorage ---------------

setLocalStorage = () => {
    localStorage.setItem('player1', JSON.stringify(p1));
    localStorage.setItem('player2', JSON.stringify(p2));
    localStorage.setItem('counter', totalCounter);
}

function populateUI() {
    p1stored = JSON.parse(localStorage.getItem('player1'));
    p2stored = JSON.parse(localStorage.getItem('player2'));
    storedCounter = JSON.parse(localStorage.getItem('counter'));
    
    if (p1stored !== null && p2stored !== null ) {
        p1 = p1stored;
        p2 = p2stored;
        totalCounter = storedCounter;
        
        playerOneName.innerHTML = p1.name;
        playerTwoName.innerHTML = p2.name;
    
        playerOneMoney.innerHTML = `// ${p1.money}`;
        playerTwoMoney.innerHTML = `// $${p2.money}`;
    
        (p1.turns <= 1)
        ? playerOneRounds.innerHTML = `// ${p1.turns} TURN` 
        : playerOneRounds.innerHTML = `// ${p1.turns} TURNS`;
    
        (p2.turns <= 1)
        ? playerTwoRounds.innerHTML = `// ${p2.turns} TURN` 
        : playerTwoRounds.innerHTML = `// ${p2.turns} TURNS`;

        counter.innerHTML = totalCounter;
    }
}

