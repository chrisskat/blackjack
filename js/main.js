let botSum = Math.floor(Math.random() * (21 - 16)) + 16;
console.log(botSum)

let yourSum = 0;

let aceCount = 0;

let deck;

let canHit = true;

window.onload = function() {
    buildDeck();
    shuffleDeck();
    startGame();
}

function buildDeck() {
    let suits = ["diamonds", "spades", "clubs", "hearts"]; 
    let values = [
        "r02",
        "r03",
        "r04",
        "r05",
        "r06",
        "r07",
        "r08",
        "r09",
        "r10",
        "J",
        "Q",
        "K",
        "A",
    ];
    deck = [];

    for (let i = 0; i < suits.length; i++) {
        for (let v = 0; v < values.length; v++) {
            deck.push(suits[i] + "-" + values[v]);
        }
    }
    
}

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let v = Math.floor(Math.random() * deck.length);
        let temp = deck[i];

        deck[i] = deck [v];
        deck[v] = temp;
    }
    console.log(deck);
}


function startGame() {

for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    console.log(card)
    
    cardImg.src = "./css/card-deck-css/images/" + card + ".svg" 
    yourSum += getValue(card);
    
    document.getElementById("your-cards").append(cardImg);
    document.getElementById("your-sum").innerText = yourSum;

}

console.log(yourSum)
    document.getElementById("hit-me").addEventListener("click", hitMe);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("reset").addEventListener("click", reset);

}

function getValue(card) {
   

    if (card.includes("A")) {
        return 11;
        }
        else if (card.includes("J") ||card.includes("Q")||card.includes("K")||card.includes("r10")) {
        return 10;
        }
        else if (card.includes("r09")) {
        return 9;
        }
        else if (card.includes("r08")) {
        return 8;
        }
        else if (card.includes("r07")) {
        return 7;
        }
        else if (card.includes("r06")) {
        return 6;
        }  
        else if (card.includes("r05")) {
        return 5;
        }
        else if (card.includes("r04")) {
        return 4;
        }
        else if (card.includes("r03")) {
        return 3;
        }
        else
        return 2;
    }


function hitMe() {

    if (!canHit) {
        return;
    }


    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./css/card-deck-css/images/" + card + ".svg"
    yourSum += getValue(card);
    document.getElementById("your-cards").append(cardImg);
    document.getElementById("your-sum").innerText = yourSum;

    if (yourSum >= 21) {
        canHit = false;
    
    }
    console.log(card)
    
    if (hitMe) {
    console.log("Hit Me")
    console.log(yourSum)
    }
}




function stay() {

    botSum = botSum;
    yourSum = yourSum;
    

    canHit = false;

    

    let message = "";

    if (yourSum == botSum) {
        message = "You Tied";
        console.log("Tie")
    }
    else if (yourSum > 21) {
        message = "You Lose";
        console.log("You Lose")
    }
    else if (yourSum < botSum) {
        message = "You Lose";
        console.log("You Lose")
    }
    else if (yourSum > botSum) {
        message = "You Win!";
        console.log("You Win")
    }
    
    document.getElementById("bot-sum").innerText = botSum;
    document.getElementById("your-sum").innerText = yourSum;
    document.getElementById("results").innerText = message;
}

function reset() {
    
}
