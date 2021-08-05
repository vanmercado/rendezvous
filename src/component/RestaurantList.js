import './RestaurantList.css';
import miniLogo from '../photos/MiniRendezvous.png';
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ListToOffer from './ListToOffer';
import ShopNames from './ShopNames';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const RestaurantList = ({ ShopList, admin }) => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		axios.get('http://app-rendezvous.herokuapp.com/lists').then((res) => {
			setLists(res.data);
		});
	}, []);

	let showLists = lists.filter((view) => view.show === 'active');

	return (
		<div>
			<div className='div-1'>
				<Link to='/restaurantlist'>
					<img className='minilogo' src={miniLogo} alt='minilogo' />
				</Link>
				<div>
					<form>
						<div className='search-bar'>
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
			</div>
			<div>
				<section className='main-section'>
					<div className='main-listnames'>
						<div>
							{ShopList.map((item) => {
								let url =
									'/restaurantlist/' + item.toLowerCase().replace(/\s/g, '');
								return (
									<div className='main-link'>
										<Link className='a-item-link' to={url}>
											{item}
										</Link>
									</div>
								);
							})}
						</div>
					</div>
					<Route exact path='/restaurantlist/'>
						<div className='main-shops'>
							{showLists.map((Converge) => {
								return <ListToOffer offer={Converge} key={Converge.name} />;
							})}
						</div>
					</Route>
					<Route path='/restaurantlist/:name'>
						<ShopNames />
					</Route>
				</section>
			</div>
		</div>
	);
};

const mapStateToProps = ({ ShopList, admin }) => {
	return {
		ShopList,
		admin,
	};
};

export default connect(mapStateToProps)(RestaurantList);
