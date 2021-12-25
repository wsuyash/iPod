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

const containerElement = document.getElementById('circular-scroll');
const activeRegion = ZingTouch.Region(containerElement);

const elements = document.getElementsByClassName('nav-btn');

for (let e of elements) {
	activeRegion.bind(e, 'rotate', function(event) {
		// console.log(event.draggable);
		// console.log(event.detail.distanceFromLast);

		let angle = Math.abs(event.detail.distanceFromLast);

		if(angle > 15 && angle < 30) {
			document.getElementById('cover-flow').classList.remove('active');
			document.getElementById('music').classList.add('active');
		}

		if(angle > 30 && angle < 45) {
			document.getElementById('music').classList.remove('active');
			document.getElementById('games').classList.add('active');
		}
	});
}

/* activeRegion.bind(elements, 'rotate', function(e) {
	console.log(e.detail.distanceFromLast);
}); */