import React from 'react';
import './Profile.css';
import './RestaurantList.css';
import miniLogo from '../photos/MiniRendezvous.png';
import { Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users.js';

import { Collapse } from 'react-bootstrap';

const Profile = () => {
	const [users, setUsers] = useState([]);
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		axios.get('http://app-rendezvous.herokuapp.com/users').then((res) => {
			setUsers(res.data);
		});
	}, []);

	let following = users.filter((view) => view.status === 'following');
	let suggested = users.filter((view) => view.status === 'suggested');

	const markSuggested = (_id) => {
		let updatedStatus = users.map((item) => {
			if (item._id === _id) {
				item.status = 'suggested';
			}
			return item;
		});
		setUsers(updatedStatus);
	};
	const markFollowing = (_id) => {
		let updatedStatus = users.map((item) => {
			if (item._id === _id) {
				item.status = 'following';
			}
			return item;
		});
		setUsers(updatedStatus);
	};
	return (
		<div>
			<section>
				<div className='d-flex justify-content-center mt-2 mb-3'>
					<Link to='/restaurantlist'>
						<img className='minilogo' src={miniLogo} alt='minilogo' />
					</Link>
				</div>
			</section>
			<section className='profile'>
				<div className='card border-danger'>
					<div className='card-body'>
						<img
							className='profile-image'
							src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Spartan_Race_logo.png/220px-Spartan_Race_logo.png'
							alt='photo'
						/>
					</div>
					<h2>Van Arden</h2>
					<div className='card-footer'>
						<Link to='/admin/dashboard' className='btn btn-danger'>
							DASH BOARD
						</Link>
					</div>
				</div>
			</section>
			{/* BODY  */}
			<section className='profile-body'>
				{/* LEFT  */}
				<div>
					<div className='card border-danger my-reviews'>
						<h4 className='card-header bg-danger'>My Reviews</h4>
						<div className='card-body p-0'>
							<div className='card-text name d-flex justify-content-between'>
								<h6 className='ml-3'>Must Try</h6>
								<span className='mr-3 rounded-circle'>
									<b>2</b>
								</span>
							</div>
							<div className='card-text name d-flex justify-content-between'>
								<h6 className='ml-3'>Been Here</h6>
								<span className='mr-3 rounded-circle'>
									<b>1</b>
								</span>
							</div>
							<div className='card-text name d-flex justify-content-center edit-profile'>
								<h6 className='ml-3 edit-profile'>Edit Profile</h6>
							</div>
						</div>
					</div>
				</div>
				{/* CENTER  */}
				<div className='profile-center'>
					<div className='center mb-3'>
						<div className='d-flex'>
							<div
								className='
								div-item-image
								col-3
								align-items-start
								justify-content-centerclassName
								pt-4
							'
							>
								<img
									className='item-pic w-100'
									src='https://b.zmtcdn.com/data/pictures/6/6314096/1a6e23045169b5877938d35603d3fc7b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
									alt=''
								/>
							</div>
							<div className='div-item-comment col-9 pt-3 pb-3'>
								<div>
									<p className='font-weight-bold item-name'>Señor Pollo</p>
								</div>
								<p>
									Facere non, nobis laboriosam adipisci illo quaerat delectus id
									fugiat ipsa repellendus rem quibusdam. Repellat provident
									corrupti tempore nisi saepe quod praesentium commodi
									voluptatem autem mollitia corporis est quisquam, sequi non
									totam fugit nobis voluptates
								</p>
								<textarea
									name=''
									id=''
									cols='55'
									rows='4'
									className
									className='mb-2 p-2'
								></textarea>
								<div>
									<button className='btn btn-warning mr-2'>Edit Review</button>
									<button className='btn btn-outline-danger'>
										Delete Review
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* sample  */}
					<div className='center mb-3'>
						<div className='d-flex'>
							<div
								className='
								div-item-image
								col-3
								align-items-start
								justify-content-centerclassName
								pt-4
							'
							>
								<img
									className='item-pic w-100'
									src='https://b.zmtcdn.com/data/pictures/chains/8/6311268/b33475c5f346dca6365c9ad04586f784.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A'
									alt=''
								/>
							</div>
							<div className='div-item-comment col-9 pt-3 pb-3'>
								<div>
									<p className='font-weight-bold item-name'>
										Kanto Freestyle Breakfast Tomas Morato
									</p>
								</div>
								<p>
									sit amet consectetur adipisicing elit. Facere non, nobis
									laboriosam adipisci illo quaerat delectus id fugiat ipsa
								</p>
								<textarea
									name=''
									id=''
									cols='55'
									rows='4'
									className
									className='mb-2 p-2'
								></textarea>
								<div>
									<button className='btn btn-warning mr-2'>Edit Review</button>
									<button className='btn btn-outline-danger'>
										Delete Review
									</button>
								</div>
							</div>
						</div>
					</div>
					{/* sample  */}
				</div>

				{/* RIGHT  */}
				{/* Following  */}
				<div className='profile-right'>
					<div className='card border-danger p-follow mb-3'>
						<h6 className='card-header'>Foodies following:</h6>
						<div className='card-body p-1'>
							<div>
								{following.slice(0, 2).map((item) => {
									return (
										<Users
											item={item}
											key={item._id}
											markSuggested={markSuggested}
										/>
									);
								})}
							</div>

							<div className='bg-light'>
								<Collapse in={show}>
									<div id='following-collapse-text'>
										{following.slice(2, 15).map((item) => {
											return (
												<Users
													item={item}
													key={item._id}
													markSuggested={markSuggested}
												/>
											);
										})}
									</div>
								</Collapse>
								<p
									className='card-text show-all'
									onClick={() => setShow(!show)}
									aria-controls='following-collapse-text'
									aria-expanded={show}
								>
									<small> show / hide all following </small>
								</p>
							</div>
						</div>
					</div>
					{/* Suggested  */}
					<div className='card border-danger my-reviews'>
						<h6 className='card-header'>Suggested Foodies to follow:</h6>
						<div className='card-body p-1'>
							<div>
								{suggested.slice(0, 4).map((item) => {
									return (
										<Users
											item={item}
											key={item._id}
											markFollowing={markFollowing}
										/>
									);
								})}
							</div>

							<div className='bg-light'>
								<Collapse in={open}>
									<div id='example-collapse-text'>
										{suggested.slice(4, 15).map((item) => {
											return (
												<Users
													item={item}
													key={item._id}
													markFollowing={markFollowing}
												/>
											);
										})}
									</div>
								</Collapse>
								<p
									className='card-text show-all'
									onClick={() => setOpen(!open)}
									aria-controls='example-collapse-text'
									aria-expanded={open}
								>
									<small> show / hide all suggested </small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>{' '}
		</div>
	);
};

export default Profile;
