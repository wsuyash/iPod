function Display() {
	return (
		<div className='Display'>
			<div id="ipod-main-menu">
				<div id="ipod-main-menu-title">iPod</div>
				<ul id="menu-items-list">
					<li className="menu-item-wrapper active" id="cover-flow" draggable="false">
						<p className="menu-item-name">Cover Flow</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper" id="music" draggable="false">
						<p className="menu-item-name">Music</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper" id="games" draggable="false">
						<p className="menu-item-name">Games</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper" id="settings" draggable="false">
						<p className="menu-item-name">Settings</p>
						<i className="fas fa-greater-than"></i>
					</li>
				</ul>
			</div>

			<div id="cover-flow-screen" className="screens hidden">
				<h1>Cover Flow</h1>
			</div>

			<div id="music-screen" className="screens hidden">
				<div className="screen-logo" id="music-logo"></div>
				<h1>Music</h1>
			</div>

			<div id="games-screen" className="screens hidden">
				<div className="screen-logo" id="games-logo"></div>
				<h1>Games</h1>
			</div>

			<div id="settings-screen" className="screens hidden">
				<div className="screen-logo" id="settings-logo"></div>
				<h1>Settings</h1>
			</div>
		</div>
	);
}

export default Display;