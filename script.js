    // Creates a card class
class Card {
    constructor(suits,ranks,vale) {
        this.suits = suits;
        this.ranks = ranks; 
        this.vale = vale; 
    }
}

    // Creates a deck class and shuffle the deck
class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    createDeck() {
        let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j + 2));
            }
        }

        this.shuffle();
    }

    shuffle() {
        this.cards = this.cards.sort((a,b) => 0.5 - Math.random());
    }
}

class GameOfWar {
    constructor(){
        this.p1 = [];
        this.p2 = [];
        this.pile = [];
        this.gameInit();
    }

        // Split cards into two players
        // Create an empty to store the pile  
        // Set the length of the pile to 0 
        //Initialize the game and create

    gameInit() {
        let deck = new Deck();
        console.log(deck.cards.length)
        this.p1 = deck.cards.splice(0, deck.cards.length / 2); //deck.cards.splice(0, deck.cards.length / 2)// this.p1.push(...deck.cards.splice(0, deck.cards.length / 2))
        console.log(deck.cards.length)
        this.p2 = deck.cards; //deck.cards // this.p2.push(...deck.cards.splice)
        console.log(deck.cards.length)
    }
  
    startGame() {
            // Set up game logic loop (if a player has no more cards)
            //make while loop 
        while (this.p1.length <= 52 && this.p2.length <= 52) {
            // console.log(p1card)
            let p1card = this.p1.pop()
            let p2card = this.p2.pop()

            // edge case at the beginning of the game to close it out
            if (p2card.vale === p1card.vale){
                console.log("War!!!");
                this.pile.push(p1card, p2card);
                this.war();
                console.log(p1card.vale)
                console.log(p2card.vale)
                } else if (p1card.vale > p2card.vale){
                this.p1.unshift(p2card, p1card, ...this.pile);
                //clear the pile
                this.pile.length = 0;
                console.log("Player 1 Wins!", this.p1.length); 
                } else {
                this.p2.unshift(p1card, p2card, ...this.pile);
                //clear the pile
                this.pile.length = 0;
                console.log("Player 2 Wins!", this.p2.length);
            }
        }
    }

    war(p1card, p2card) {
        // Adjust for edge cases (a player does not have enough cards)
        // Pile setup//
        // - Check to see there are enough cards in player’s deck to initiate war
        // - If both have enough cards, remove last 3 cards from each deck (final else statement below)
        // - Push the removed cards and the original tie cards into the pile
        // edge case if a player has 0 cards left in hands

        if (this.p1.length < 4 && this.p2.length < 4) {
            let p1WarCards = this.p1.splice(0, this.p1.length - 2) 
            let p2WarCards = this.p2.splice(0, this.p2.length - 2)
            this.pile.push(p1card, ...p1WarCards, p2card, ...p2WarCards)  
            console.log("Player 1 Wins!")
        } else if 
            (this.p1.length < 4) {
            let p1WarCards = this.p1.splice(0, this.p1.length, - 2)  
            let p2WarCards = this.p2.splice(this.p2.length - 3, 3)
            this.pile.push(p1card, ...p1WarCards, p2card, ...p2WarCards) 
            // this.p2.length 
            // this.pile.push(...this.p2.splice(0, this.p1.length - 2))
            console.log("Player 2 Wins!")
        } else if
            (this.p2.length <= 4) {
            let p2WarCards = this.p2.splice(0, this.p2.length, - 2)
            let p1WarCards = this.p1.splice(this.p1.length - 3, 3)
            this.pile.push(p1card, ...p1WarCards, p2card, ...p2WarCards) 
            // this.p2.length 
            // this.pile.push(...this.p2.splice(0, this.p1.length - 2))
            console.log("Player 1 Wins!")
        } else {
            let p2WarCards = this.p2.splice(this.p2.length, - 3, 3)   
            let p1WarCards = this.p1.splice(this.p1.length - 3, 3)
            //this.pile.push(p1card, ...p1WarCards, p2card, ...p2WarCards) 
        } 
    }
}


let game = new GameOfWar()

game.startGame()