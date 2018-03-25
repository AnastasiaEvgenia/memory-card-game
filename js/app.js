//Main Program--------------------------------------------------------------
const cards = ["fa fa-android","fa fa-android","fa fa-github-alt","fa fa-github-alt","fa fa-space-shuttle","fa fa-space-shuttle","fa fa-motorcycle","fa fa-motorcycle","fa fa-bug","fa fa-bug","fa fa-cloud","fa fa-cloud","fa fa-flash","fa fa-flash","fa fa-heartbeat","fa fa-heartbeat"];
const deck = document.querySelector('.deck');
const shuffledCards = shuffle(cards);
let openedCardsList = [];
generateListItems();

document.querySelector('.deck').addEventListener( 'click', function (evt) {
	openCard(evt);
	addCardsToNewList(evt);
} );

// Shuffle function from http://stackoverflow.com/a/2450976
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
//---------------------------------------------------------------------------

/*
Function to shuffle the list of cards and adds them to
the dashboard flipped down.
*/
function generateListItems () {
	const fragment = document.createDocumentFragment();
	
	for (card of shuffledCards) {
		const newLiElement = document.createElement('li');
		newLiElement.className = "card";

		const newIElement = document.createElement('i');
		newIElement.className = card;

		newLiElement.appendChild(newIElement);
		fragment.appendChild(newLiElement);
	}

	deck.appendChild(fragment);
}

//Function that opens a card
function openCard (x) {
    if (x.target.nodeName === 'LI') {  // ← verifies target is desired element
        console.log('A li was clicked with text ' + x.target.textContent);
       	console.log(x.target);
       	x.target.classList.add("open");
    }
}

//Function that adds the class of the clicked card
//in a new list
function addCardsToNewList (x) {
	const clickedCardClass = x.target.childNodes[0].getAttribute("class");
	openedCardsList.push(clickedCardClass);
	console.log(openedCardsList);
}


//Function for different cards. Needs to be regonfigured
//too, in the event listener
 function noMatchCards () {
	const noMatchCards = deck.getElementsByTagName('li');
	for (card of noMatchCards) {
		card.classList.add("no_match");
	}
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */


