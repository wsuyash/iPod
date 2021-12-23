function CircularScrollbar() {
	return (
		<div className='CircularScrollbar'>
			<span id='menu-button'>MENU</span>
			<i class="fa-solid fa-backward-fast" id='backward-button'></i>
			<div id='play-pause-wrapper'>
				<i class="fa-solid fa-play" id='play-button'></i>
				<i class="fa-solid fa-pause" id='pause-button'></i>
			</div>
			<i class="fa-solid fa-forward-fast" id='forward-button'></i>
			<div id='enter-button'></div>
		</div>
	);
}

export default CircularScrollbar;