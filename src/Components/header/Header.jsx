import './Header.css';
import headshot from '../../assets/FarmersMarketMural.jpg';

function Header() {
	return (
		<div id="header">
			<img src={headshot} alt="Nick:)" id="image" />
			<h3>
				{'<'} Hi, I'm Nick! /{'>'}
			</h3>
		</div>
	);
}

export default Header;
