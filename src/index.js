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

// Current angle
let angle = 0;

// Binding rotate event from ZingTouch to the CircularScrollbar
activeRegion.bind(containerElement, 'rotate', function(event) {
	angle += event.detail.distanceFromLast;

	// Resetting the angle to 0 in order to prevent scrolling from being stuck
	if(Math.abs(angle) > 75) {
		angle = 0;
	}

	// Allocating the "active" class to the relevent menu item depending on the degree of rotation
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
