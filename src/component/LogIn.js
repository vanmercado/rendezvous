import './CreateInput.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import DashBoard from './DashBoard';
import { connect } from 'react-redux';

const LogIn = ({ admin, loginAdmin }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [users, setUsers] = useState([]);
	const [errorUsername, setErrorUser] = useState('');
	const [errorPassword, setErrorPass] = useState('');
	const [boxes, setBoxes] = useState([]);

	useEffect(() => {
		axios.get('https://app-rendezvous.herokuapp.com/users').then((res) => {
			setUsers(res.data);
		});
	}, []);

	// const [token, setToken] = useState();
	// const login = (e) => {
	// 	e.preventDefault(e);
	// 	for (let x = 0; x < users.length; x++) {
	// 		if (username === users[x].name) {
	// 			setErrorUser('');
	// 		} else {
	// 			setErrorUser('not match');
	// 		}
	// 		if (password === users[x].password) {
	// 			setErrorPass('');
	// 		} else {
	// 			setErrorPass('not match');
	// 		}
	// 	}
	// };
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const data = {
	// 		username: username,
	// 		password: password,
	// 	};

	// 	axios
	// 		.post('http://localhost:8000/login', data)
	// 		.then((res) => {
	// 			console.log(res);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };
	const login = () => {
		admin = 'inactive';
	};

	return (
		<form
			className=' col-11 container-fluid'
			// onSubmit={handleSubmit}
		>
			<div className='form-group mt-5'>
				<label for='usernames'>
					<h6>Username:</h6>
				</label>
				<input
					type='text'
					name='usernames'
					className='form-control'
					id='add-input'
					autoFocus
					required
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<span>{errorUsername}</span>
			</div>
			<div className='form-group'>
				<label for='password'>
					<h6>Password:</h6>
				</label>
				<input
					type='password'
					name='password'
					className='form-control'
					id='add-input'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<span>{errorPassword}</span>
			</div>
			<div className='form-check mt-4'>
				<input
					type='text'
					name='checkbox'
					className='form-check-input'
					type='checkbox'
					value=''
				/>
				<label for='checkbox' className='form-check-label'>
					Remember Me
				</label>
			</div>
			<div className='mt-4'>
				{/* {username === 'vanarden' ? alert() : null} */}

				{/* <Link to='/admin/home'>
					<button className='btn btn-danger mr-3' onClick={login} type='submit'>
						Log in
					</button>
				</Link> */}
				<Link to='/admin/home'>
					<button className='btn btn-danger mr-3' type='submit' onClick={login}>
						Log in
					</button>
				</Link>
				<a href='#'>Forgot Your Password?</a>
			</div>
		</form>
	);
};

const mapStateToProps = ({ admin }) => {
	return {
		admin,
	};
};

export default connect(mapStateToProps)(LogIn);
