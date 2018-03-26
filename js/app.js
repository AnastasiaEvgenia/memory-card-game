//-----------MAIN PROGRAM-----------------------------------------------
const cardIcons = ["fa fa-android","fa fa-android","fa fa-github-alt","fa fa-github-alt","fa fa-space-shuttle","fa fa-space-shuttle","fa fa-motorcycle","fa fa-motorcycle","fa fa-bug","fa fa-bug","fa fa-cloud","fa fa-cloud","fa fa-flash","fa fa-flash","fa fa-heartbeat","fa fa-heartbeat"];

const deck = document.querySelector('.deck');
const cards = document.querySelectorAll('.card');
const cardOpen = document.querySelectorAll('.open');
const cardMatch = document.querySelectorAll('.match');
const cardNoMatch = document.querySelectorAll('.no_match');

//shufle cards(icons)
const shuffledCards = shuffle(cards);
let openedCards = [];

//create grid
generateListItems();

//add one event listener to cards parent element <ul>
deck.addEventListener( 'click', function (evt) {

} );



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
function generateDashboard () {
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

function openCard (x) {
    if (x.target.nodeName === 'LI') {  
       	x.target.classList.add("open");
    }
}
