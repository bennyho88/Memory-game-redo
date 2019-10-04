const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    console.log('I was clicked!');
    console.log(this);
    this.classList.toggle('flip');

    if(!hasFlippedCard) {
        // First click
        hasFlipperCard = true;
        firstCard = this;
    } else {
        // Second click
        hasFlippedCard = false;
        secondCard = this;

        console.log(firstCard, secondCard);
    }
}

cards.forEach(card => card.addEventListener('click', flipCard));

