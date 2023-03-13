class Card {
    constructor(suits,ranks,value) {
        this.suits = suits
        this.ranks = ranks 
        this.val = value 
    }
}

class Deck {
    constructor() {
        this.cards = []
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
}


const deck = new Deck()
console.log(deck)
