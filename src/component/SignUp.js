import React from 'react';
import './CreateInput.css';
import { Route, Link } from 'react-router-dom';

const SignUp = () => {
	return (
		<form className=' col-12 container-fluid'>
			<div className='form-group mt-4 d-flex'>
				<div className='col-6'>
					<label for='username'>
						<h6>First Name:</h6>
					</label>
					<input
						type='text'
						name='username'
						className='form-control'
						id='add-input'
						autoFocus
						required
						// value={name}
						// onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='col-6 '>
					<label for='password'>
						<h6>Last Name:</h6>
					</label>
					<input
						type='text'
						name='password'
						className='form-control'
						id='add-input'
						required
						// value={name}
						// onChange={(e) => setName(e.target.value)}
					/>
				</div>
			</div>
			<div className='form-group container'>
				<label for='username'>
					<h6>Username:</h6>
				</label>
				<input
					type='text'
					name='username'
					className='form-control'
					id='add-input'
					required
					// value={name}
					// onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-group container'>
				<label for='username'>
					<h6>Email Address:</h6>
				</label>
				<input
					type='text'
					name='username'
					className='form-control'
					id='add-input'
					required
					// value={name}
					// onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-group container'>
				<label for='username'>
					<h6>Password:</h6>
				</label>
				<input
					type='text'
					name='username'
					className='form-control'
					id='add-input'
					required
					// value={name}
					// onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='form-group container'>
				<label for='username'>
					<h6>Confirm Password:</h6>
				</label>
				<input
					type='text'
					name='username'
					className='form-control'
					id='add-input'
					required
					// value={name}
					// onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className='container'>
				<button className='btn btn-danger'>Register</button>
			</div>
		</form>
		// <section className='forms-signup'>
		// 	<form className='forms-signup'>
		// 		<div className='signup-fullname'>
		// 			<div className='div-fullname'>
		// 				<label>First Name</label>
		// 				<input type='text' required className='input-fullname' />
		// 			</div>
		// 			<div className='div-fullname'>
		// 				<label>Last Name</label>
		// 				<input type='text' required className='input-lastname' />
		// 			</div>
		// 		</div>
		// 		<label for='username'>Username</label>
		// 		<input type='text' name='username' required className='input-user' />
		// 		<label for='email'>E-mail Address</label>
		// 		<input type='email' name='email' required className='input-user' />
		// 		<label for='password'>Password</label>
		// 		<input
		// 			type='password'
		// 			name='password'
		// 			required
		// 			className='input-user'
		// 		/>
		// 		<label for='confirmPassword'>Confirm Password</label>
		// 		<input
		// 			type='password'
		// 			name='confirmPassword'
		// 			required
		// 			className='input-user'
		// 		/>
		// 		<div className='register-div'>
		// 			<button className='reg-btn'>Register</button>
		// 		</div>
		// 	</form>
		// </section>
	);
};

export default SignUp;
