// Create a card/deck class and shuffle the deck
class Card {
    constructor(suits,ranks,value) {
        this.suits = suits
        this.ranks = ranks 
        this.val = value 
    }
};

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck()
    }

    createDeck() {
        let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], j + 2))
            }
        }

        this.shuffle()
    }

    shuffle() {
        this.cards = this.cards.sort((a,b) => 0.5 - Math.random())
    }
};

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
        let deck = new Deck()
        this.p1 = deck.cards.splice(0,26) //deck.cards.splice(0, deck.cards.length / 2)// this.p1.push(...deck.cards.splice(0, deck.cards.length / 2))
        this.p2 = deck.cards.splice(27,52) //deck.cards // this.p2.push(...deck.cards.splice)
    }
     
    startGame() {
        // Set up game logic loop (a player has no more cards)
        let p1card = this.p1.pop();
        let p2card = this.p2.pop();

        if  (p1card.val === p2card.val){
            console.log("War!!!");
            this.pile.push(p1card, p2card)
            this.war()
        } else if (p1card.val > p2card.val) {
            this.p1.unshift(p2card, p1card, ...this.pile)
            //clear the pile
            this.pile = 0 
            console.log("Player 1 Wins!", this.p1.length); 
        } else {
            this.p2.unshift(p1card, p2card, ...this.pile)
            //clear the pile
            this.pile = 0 
            console.log("Player 2 Wins!", this.p2.length);
        }
    }
    war() {
        // Adjust for edge cases (a player does not have enough cards)
        this.pile.push(...this.p1.splice(0, 3))
        this.pile.push(...this.p2.splice(0, 3))

    } 
};

let game = new GameOfWar();

GameOfWar();