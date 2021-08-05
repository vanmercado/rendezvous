import { Route, Link } from 'react-router-dom';
import miniLogo from '../photos/MiniRendezvous.png';
import './CreateInput.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';

const CreateInput = ({ addItem, editedResto, editItem }) => {
	const [name, setName] = useState('');
	const [hours, setHours] = useState('');
	const [cost, setCost] = useState('');
	const [address, setAddress] = useState('');
	const [type, setType] = useState('');
	const [image, setImage] = useState('');

	const saveBtnHandler = () => {
		if (
			(name !== '',
			hours !== '',
			cost !== '',
			address !== '',
			type !== '',
			image !== '')
		) {
			axios
				.post('https://app-rendezvous.herokuapp.com/lists', {
					image: image,
					type: type,
					name: name,
					address: address,
					cost: cost,
					hours: hours,
					show: 'inactive',
					status: 'pending',
				})
				.then((res) => {
					const newBoxItem = res.data;
					addItem(newBoxItem);
					alert('Pending Request! ' + name + ' will be approved by the admin.');
					setName('');
					setHours('');
					setCost('');
					setAddress('');
					setType('');
					setImage('');
				});
		}
	};

	useEffect(() => {
		setName(editItem ? editItem.name : '');
		setHours(editItem ? editItem.hours : '');
		setCost(editItem ? editItem.cost : '');
		setAddress(editItem ? editItem.address : '');
		setType(editItem ? editItem.type : '');
		setImage(editItem ? editItem.image : '');
	}, [editItem]);

	const editSaveBtn = (_id) => {
		if (
			(name !== '',
			hours !== '',
			cost !== '',
			address !== '',
			type !== '',
			image !== '')
		) {
			axios
				.put('https://app-rendezvous.herokuapp.com/lists/' + _id, {
					image: image,
					type: type,
					name: name,
					address: address,
					cost: cost,
					hours: hours,
				})
				.then((res) => {
					editedResto(_id, res.data);
					alert('Edit save');
					setName('');
					setHours('');
					setCost('');
					setAddress('');
					setType('');
					setImage('');
				});
		}
	};

	const clearBtnHandler = () => {
		setName('');
		setHours('');
		setCost('');
		setAddress('');
		setType('');
		setImage('');
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
			<section className=' container col-6'>
				<form>
					<div className='form-group'>
						<label for='namess'>Restaurant Name:</label>
						<input
							type='text'
							name='namess'
							className='form-control'
							id='add-input'
							autoFocus
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label for='hourss'>Opening Hours:</label>
						<input
							type='text'
							name='hourss'
							className='form-control'
							id='add-input'
							required
							value={hours}
							onChange={(e) => setHours(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label for='costs'>Average Cost:</label>
						<input
							type='text'
							name='costs'
							className='form-control'
							id='add-input'
							required
							value={cost}
							onChange={(e) => setCost(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label for='addresss'>Address:</label>
						<input
							type='text'
							name='addresss'
							className='form-control'
							id='add-input'
							required
							value={address}
							onChange={(e) => setAddress(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label for='categorys'>Category:</label>
						<select
							name='categorys'
							className='col-12 selectCategory '
							id='add-input'
							required
							value={type}
							onChange={(e) => setType(e.target.value)}
						>
							<option value=''> -- Select Category --</option>
							<option value='Casual'>Casual Dining</option>
							<option value='Quick'>Quick Bites</option>
							<option value='Kape'>Cafes</option>
							<option value='Nightlife'>Drinks and Nightlife</option>
							<option value='Allday'>Allday Breakfast</option>
							<option value='Dessert'>Desserts and Bakes</option>
							<option value='Buff'>Buffet</option>
						</select>
					</div>
					{/* <div>
						<Form>
							<Form.Group>
								<Form.File
									id='exampleFormControlFile1'
									label='Image:'
									value={image}
									onChange={(e) => setImage(e.target.value)}
								/>
							</Form.Group>
						</Form>
					</div> */}
					<div className='form-group'>
						<label for='image'>Image:</label>
						<input
							type='url'
							name='image'
							className='form-control'
							id='add-input'
							required
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
					</div>
					<div className='d-flex justify-content-end'>
						<button
							className='btn btn-outline-dark mr-3'
							onClick={clearBtnHandler}
						>
							Clear
						</button>

						<Link to='/admin/dashboard'>
							<button type='button' className='btn btn-secondary'>
								Go Back
							</button>
						</Link>

						{editItem ? (
							<button
								type='submit'
								className='btn btn-warning ml-3'
								onClick={() => editSaveBtn(editItem._id)}
							>
								Edit Save
							</button>
						) : (
							<button
								type='submit'
								className='btn btn-success ml-3'
								onClick={saveBtnHandler}
							>
								Save
							</button>
						)}
					</div>
				</form>
			</section>
		</div>
	);
};

export default CreateInput;
