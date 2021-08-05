import './DashBoard.css';
import './RestaurantList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import miniLogo from '../photos/MiniRendezvous.png';
import { Route, Link } from 'react-router-dom';
import BoardList from './BoardList';
import { connect } from 'react-redux';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const DashBoard = ({ editItem }) => {
	const [lists, setLists] = useState([]);

	useEffect(() => {
		axios.get('https://app-rendezvous.herokuapp.com/lists').then((res) => {
			setLists(res.data);
		});
	}, []);

	const deleteNewItem = (_id) => {
		let updateNewItem = lists.filter((item) => item._id !== _id);
		setLists(updateNewItem);
	};

	return (
		<div>
			<section>
				<div className='d-flex justify-content-center mt-2 mb-3'>
					<Link to='/restaurantlist'>
						<img className='minilogo' src={miniLogo} alt='minilogo' />
					</Link>
				</div>
				<div className='container justify-content-end d-flex'>
					{/* DropLeft  */}
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
								<Dropdown.Item eventKey='2'>
									<Link to='/' className='text-decoration-none text-dark'>
										Log Out
									</Link>
								</Dropdown.Item>
							</DropdownButton>
						))}
					</div>

					{/* EndDropLeft  */}
				</div>
			</section>
			<section className='admin'>
				<div className='container'>
					<h1 className='mb-2'>Admin Dashboard</h1>
					<Link
						to='/admin/dashboard/create'
						className='btn btn-danger d-block mb-3 col-2'
						data-toggle='modal'
						data-target='.bd-example-modal-lg'
					>
						Add New Restaurant
					</Link>
					<form>
						<input
							className='form-control w-25 col-2 d-inline admin-search'
							type='text'
							placeholder='Search for Restaurant'
							name='search'
							required
						/>
						<button for='search' className='btn btn-outline-info ml-1'>
							Search
						</button>
					</form>
				</div>
			</section>
			<section className='mt-2 mb-5'>
				<table className='table table-striped container'>
					<thead>
						<tr>
							<th className='col-2'>Name</th>
							<th className='col-6'>Address</th>
							<th className='col-2'>Category</th>
							<th className='col-2'>Action</th>
						</tr>
					</thead>
					<tbody>
						{lists.map((list) => {
							return (
								<BoardList
									list={list}
									key={list.name}
									deleteNewItem={deleteNewItem}
									editItem={editItem}
								/>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
};

const mapStateToProps = ({ editItem }) => {
	return {
		editItem,
	};
};

export default connect(mapStateToProps)(DashBoard);
