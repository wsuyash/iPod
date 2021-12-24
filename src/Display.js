function Display() {
	return (
		<div className='Display'>
			<div id="ipod-main-menu">
				<div id="ipod-main-menu-title">iPod</div>
				<ul id="menu-items-list">
					<li className="menu-item-wrapper active">
						<p className="menu-item-name">Cover Flow</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper">
						<p className="menu-item-name">Music</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper">
						<p className="menu-item-name">Games</p>
						<i className="fas fa-greater-than"></i>
					</li>
					<li className="menu-item-wrapper">
						<p className="menu-item-name">Settings</p>
						<i className="fas fa-greater-than"></i>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Display;