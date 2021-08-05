import './ListToOffer.css';
import Logo from '../photos/MiniRendezvous.png';
import { Link } from 'react-router-dom';
import { useParams, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Reviews from './Reviews';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

const ViewReview = ({ admin }) => {
	const { review } = useParams();
	const [lists, setLists] = useState([]);

	useEffect(() => {
		axios.get('http://app-rendezvous.herokuapp.com/lists').then((res) => {
			setLists(res.data);
		});
	}, []);

	let viewArray = lists.filter(
		(view) => view.name.toString().toLowerCase().replace(/\s/g, '') === review
	);

	return (
		<div>
			<header className='div-1'>
				<Link to='/restaurantlist'>
					<img className='minilogo' src={Logo} alt='logo photo' />
				</Link>
				<div>
					<form>
						<div className='search-bar'>
							<label for='search'></label>
							<input
								className='search-input'
								type='text'
								name='search'
								placeholder='Search for restaurants'
								required
							/>
							<button className='btn btn-outline-danger mr-2'>Search</button>
							{admin === 'active' ? (
								<div className='mt-3'>
									{/* DropLeft */}
									<div className='mb-2'>
										{['left'].map((direction) => (
											<DropdownButton
												as={ButtonGroup}
												key={direction}
												id={`dropdown-button-drop-${direction}`}
												drop={direction}
												variant=' border border-white bg-white text-info btn-outline-light'
												title={` vanarden `}
											>
												<Dropdown.Item eventKey='1'>
													<Link
														to='/admin/home'
														className='text-decoration-none text-dark'
													>
														Profile
													</Link>
												</Dropdown.Item>
												<Dropdown.Item eventKey='2'>
													<Link
														to='/restaurantlist'
														className='text-decoration-none text-dark'
													>
														View Restaurant List
													</Link>
												</Dropdown.Item>
												<Dropdown.Item eventKey='3'>
													<Link
														to='/'
														className='text-decoration-none text-dark'
													>
														Log Out
													</Link>
												</Dropdown.Item>
											</DropdownButton>
										))}
									</div>
									{/* EndDropLeft  */}
								</div>
							) : (
								<Link to='/' className='list-a-login'>
									Login
								</Link>
							)}
						</div>
					</form>
				</div>
			</header>
			<main className='main-details'>
				{viewArray.map((item) => {
					return <Reviews viewArray={item} />;
				})}
			</main>
		</div>
	);
};

const mapStateToProps = ({ admin }) => {
	return {
		admin,
	};
};

export default connect(mapStateToProps)(ViewReview);
