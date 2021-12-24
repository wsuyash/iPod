function CircularScrollbar() {
	return (
		<div className='CircularScrollbar' id="circular-scroll">
			<span id='menu-button'>MENU</span>
			<i className="fa-solid fa-backward-fast nav-btn" id='backward-button'></i>
			<div id='play-pause-wrapper'>
				<i className="fa-solid fa-play nav-btn" id='play-button'></i>
				<i className="fa-solid fa-pause nav-btn" id='pause-button'></i>
			</div>
			<i className="fa-solid fa-forward-fast nav-btn" id='forward-button'></i>
			<div id='enter-button'></div>
		</div>
	);
}

export default CircularScrollbar;