import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from './photos/rendezvous.PNG';
import Login from './component/LogIn';
import SignUp from './component/SignUp';
import RestaurantList from './component/RestaurantList';
import ViewReview from './component/ViewReview';
import Profile from './component/Profile';
import DashBoard from './component/DashBoard';
import CreateInput from './component/CreateInput';
import TabNavs from './tabs/TabNavs';
import Tabs from './tabs/Tabs';
import './App.css';
import './component/ListToOffer.css';

const App = ({ selected, editItem, admin }) => {
	const [lists, setLists] = useState([]);

	const [users, setUsers] = useState([]);
	const [username, setUsername] = useState('');

	useEffect(() => {
		axios.get('https://app-rendezvous.herokuapp.com/lists').then((res) => {
			setLists(res.data);
		});
	}, []);

	useEffect(() => {
		axios.get('https://app-rendezvous.herokuapp.com/users').then((res) => {
			setUsers(res.data);
		});
	}, []);

	const addItem = (newItem) => {
		setLists([...lists, newItem]);
	};
	const deleteNewItem = (_id) => {
		let updateNewItem = lists.filter((item) => item._id !== _id);
		setLists(updateNewItem);
	};

	const editedResto = (_id, name, type, hours, cost, address) => {
		let updatedList = lists.map((item) => {
			if (item._id === _id) {
				item.name = name;
				item.type = type;
				item.hours = hours;
				item.cost = cost;
				item.address = address;
			}
			return item;
		});
		setLists(updatedList);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<Route exact path='/'>
					<section className='App-converge'>
						<img className='logo' src={Logo} alt='Logo photo' />
						<div>
							<Link to='/restaurantlist'>
								<button className='App-converge-view-btn'>
									VIEW RESTAURANT LIST
								</button>
							</Link>
						</div>
					</section>
				</Route>
				<Route exact path='/'>
					<section className='forms'>
						<div className='forms-div'>
							<TabNavs tabs={['Login', 'Sign Up']} selected={selected}>
								<div className=' '>
									<Tabs isSelected={selected === 'Login'}>
										<Login />
									</Tabs>
									<Tabs isSelected={selected === 'Sign Up'}>
										<SignUp />
									</Tabs>
								</div>
							</TabNavs>
						</div>
					</section>
				</Route>
			</header>
			<main>
				<section>
					<Route path='/restaurantlist'>
						<RestaurantList />
					</Route>
				</section>
				<Route exact path='/viewreviews/:review'>
					<ViewReview />
				</Route>
				<Route exact path='/admin/home'>
					<Profile />
				</Route>

				<Route exact path='/admin/dashboard'>
					<DashBoard deleteNewItem={deleteNewItem} editItem={editItem} />
				</Route>
				<Route exact path='/admin/dashboard/create'>
					<CreateInput
						addItem={addItem}
						editedResto={editedResto}
						editItem={editItem}
					/>
				</Route>
			</main>
		</div>
	);
};

const mapStateToProps = ({ selected, editItem, admin }) => {
	return {
		selected,
		editItem,
		admin,
	};
};

export default connect(mapStateToProps)(App);
