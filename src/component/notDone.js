import './ListToOffer.css';
import Logo from '../photos/MainLogo.PNG';

const notDone = () => {
	return (
		<div>
			<header className='div-1'>
				<Link to='/restaurantlist'>
					<img className='minilogo' src={Logo} alt='logo photo' />
				</Link>
				<div>
					<div className='search-bar'>
						<input
							className='search-input'
							type='text'
							name='search'
							placeholder='Search for restaurants'
						/>
						<button className='list-search-btn'>Search</button>
						<Link to='/' className='list-a-login'>
							Login
						</Link>
					</div>
				</div>
			</header>
		</div>
	);
};

export default notDone;
