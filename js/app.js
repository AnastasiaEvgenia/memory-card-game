/*
 * Create a list that holds all of your cards
 */
const cards = ["fa fa-android","fa fa-android","fa fa-github-alt","fa fa-github-alt","fa fa-space-shuttle","fa fa-space-shuttle","fa fa-motorcycle","fa fa-motorcycle","fa fa-bug","fa fa-bug","fa fa-cloud","fa fa-cloud","fa fa-flash","fa fa-flash","fa fa-heartbeat","fa fa-heartbeat"];
const deck = document.querySelector('.deck');


//Function that loops through each card, creates its HTML
//and add it to the page. It works!!
function generateListItems () {
	const fragment = document.createDocumentFragment();

	for (card of cards) {
		const newLiElement = document.createElement('li');
		newLiElement.className = "card";

		const newIElement = document.createElement('i');
		newIElement.className = card;

		newLiElement.appendChild(newIElement);
		fragment.appendChild(newLiElement);
	}

	deck.appendChild(fragment);
}

generateListItems();
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

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
