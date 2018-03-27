//-----------MAIN PROGRAM-----------------------------------------------
const cardIcons = ["fa fa-android", "fa fa-android", "fa fa-github-alt", "fa fa-github-alt", "fa fa-space-shuttle", "fa fa-space-shuttle", "fa fa-motorcycle", "fa fa-motorcycle", "fa fa-bug", "fa fa-bug", "fa fa-cloud", "fa fa-cloud", "fa fa-flash", "fa fa-flash", "fa fa-heartbeat", "fa fa-heartbeat"];

const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');

const cardMatch = document.querySelectorAll('.match');
const cardNoMatch = document.querySelectorAll('.no_match');

//shufle cards(icons)
const shuffledCards = shuffle(cardIcons);

let openedCards = [];
let previousOpenedCard = null; //keep a reference to the first opened card element

//create grid
generateDashboard();

//add one event listener to cards parent element <ul>
deck.addEventListener('click', function(evt) {
	//If checks suggested by George Alexandris
	//check that target is a <li> element
	if (evt.target.nodeName === 'LI') {
		//check that the card is not already matched
		if (!evt.target.classList.contains("match")) {
			// check that the openedCards[] has been emptied by the setTimeout()
			if (openedCards.length < 2) {
				//if this is the first card to be opened, store tis 
				//reference in previousOpenedCard and open it
				if (previousOpenedCard === null) {
					previousOpenedCard = evt.target;
					openCard(evt);
					check(evt);
				}
				//open this card only after you check that it is not the
				//same with the one previously opened
				if (previousOpenedCard != evt.target) {
					previousOpenedCard = null;
					openCard(evt);
					check(evt);
				}
			}
		}
	}

});

//----------FUNCTIONS DECLARATIONS-----------------------------------------

// Shuffle cards function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// Arrange cards in dashboard in a 4x4 grid randomly
function generateDashboard() {
    const fragment = document.createDocumentFragment();

    for (card of shuffledCards) {
        const newListItem = document.createElement('li');
        newListItem.className = "card";

        const cardIcon = document.createElement('i');
        cardIcon.className = card;

        newListItem.appendChild(cardIcon);
        fragment.appendChild(newListItem);
    }

    deck.appendChild(fragment);
}


// Open card that is clicked and store its icon class to an array
function openCard(x) {
        x.target.classList.add("open");
        const clickedCardIconClass = x.target.childNodes[0].getAttribute("class");
        openedCards.push(clickedCardIconClass);
}


// Check if cards match and act accordingly
function check (x) {

    if (openedCards.length == 2) {
        if (openedCards[0] === openedCards[1]) {
            let cardOpen = document.querySelectorAll('.open');
            cardOpen[0].classList.add("match");
            cardOpen[1].classList.add("match");
            cardOpen[0].classList.remove("open");
            cardOpen[1].classList.remove("open");
            openedCards.splice(0, 2);
        } else {
            let cardOpen = document.querySelectorAll('.open');
            cardOpen[0].classList.add("no_match");
            cardOpen[1].classList.add("no_match");
            setTimeout(function() {
                cardOpen[0].classList.remove("open", "no_match");
                cardOpen[1].classList.remove("open", "no_match");
                openedCards.splice(0, 2);
            }, 500);
        }
    }
}