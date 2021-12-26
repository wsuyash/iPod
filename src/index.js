import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ZingTouch from 'zingtouch'

ReactDOM.render(
	<React.StrictMode>
    	<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// Using ZingTouch to handle circular scroll
const containerElement = document.getElementById('circular-scroll');
const activeRegion = ZingTouch.Region(containerElement);

// Setting the current scroll angle to 0
let angle = 0;

// Binding rotate event from ZingTouch to the CircularScrollbar
activeRegion.bind(containerElement, 'rotate', function(event) {

	// Disable scroll when not on main-menu screen
	if (document.getElementById('ipod-main-menu').classList.contains('hidden')) {
		return;
	};

	// Increasing angle by scroll degree
	angle += event.detail.distanceFromLast;

	// Resetting the angle to 0 in order to prevent scrolling from being stuck
	if(Math.abs(angle) > 75) {
		angle = 0;
	}

	// Allocating the "active" class to the relevent menu item depending on the angle of rotation
	if((Math.abs(angle) > 0 && Math.abs(angle) < 15)) {
		document.getElementById('cover-flow').classList.add('active');
		document.getElementById('music').classList.remove('active');
		document.getElementById('games').classList.remove('active');
		document.getElementById('settings').classList.remove('active');
	}

	if(Math.abs(angle) > 15 && Math.abs(angle) < 30) {
		document.getElementById('music').classList.add('active');
		document.getElementById('cover-flow').classList.remove('active');
		document.getElementById('games').classList.remove('active');
		document.getElementById('settings').classList.remove('active');
	}

	if(Math.abs(angle) > 30 && Math.abs(angle) < 60) {
		document.getElementById('games').classList.add('active');
		document.getElementById('cover-flow').classList.remove('active');
		document.getElementById('music').classList.remove('active');
		document.getElementById('settings').classList.remove('active');
	}

	if(Math.abs(angle) > 60) {
		document.getElementById('settings').classList.add('active');
		document.getElementById('cover-flow').classList.remove('active');
		document.getElementById('music').classList.remove('active');
		document.getElementById('games').classList.remove('active');
	}
});

// Clicking the "MENU" button to get to the main menu
const menuButton = document.getElementById('menu-button'); // Getting the "MENU" button
menuButton.addEventListener('click', function(e) {
	// Hiding all other screens
	document.getElementById('cover-flow-screen').classList.add('hidden');
	document.getElementById('music-screen').classList.add('hidden');
	document.getElementById('games-screen').classList.add('hidden');
	document.getElementById('settings-screen').classList.add('hidden');

	// Displaying the main menu
	document.getElementById('ipod-main-menu').classList.remove('hidden');
});

// Clicking the "ENTER" button to get into the particular screen like cover-flow, music, games, settings.
const enterButton = document.getElementById('enter-button'); // Getting the "ENTER" button
enterButton.addEventListener('click', function(event){
	const activeClassElement = document.getElementsByClassName('active')[0].id; // Getting the element that is currently selected
	const idToDisplay = activeClassElement + "-screen"; // Some string manipulation to get the id of the element that is to be displayed

	// Hiding the main menu
	document.getElementById('ipod-main-menu').classList.add('hidden');;

	// Displaying the selected menu item
	document.getElementById(idToDisplay).classList.remove('hidden');
});