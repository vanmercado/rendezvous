import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';

const BoardList = ({ list, deleteNewItem, editItem }) => {
	const [submit, setSubmit] = useState('Pending...');
	const submitHandle = () => {
		setSubmit('Update on Database');
		alert('Please update ' + list.name + ' on database!');
	};

	const deleteBtnHandler = (_id) => {
		axios
			.delete('https://app-rendezvous.herokuapp.com/lists/' + _id)
			.then((res) => {
				deleteNewItem(_id);
				alert(`${list.name} is deleted.  category: ${list.type}`);
			});
	};

	return (
		<tr>
			<th scope='row'>
				<h6>{list.name}</h6>
			</th>
			<td>{list.address}</td>
			<td>{list.type}</td>

			<td>
				<div>
					{list.show === 'active' ? (
						<button
							className='btn btn-warning mr-3'
							onClick={() => alert('Please edit on Database Thanks!')}
						>
							Edit
						</button>
					) : (
						<Link to='/admin/dashboard/create'>
							<button
								className='btn btn-warning mr-3'
								onClick={() => editItem(list)}
							>
								Edit
							</button>
						</Link>
					)}
					{list.show === 'active' ? (
						<button
							className='btn btn-outline-danger'
							onClick={() => alert('Please delete on Database Thanks!')}
						>
							Delete
						</button>
					) : (
						<div className='d-inline'>
							<button
								className='btn btn-outline-danger'
								onClick={() => deleteBtnHandler(list._id)}
							>
								Delete
							</button>
							<button
								className='btn btn-success mt-3 col-10'
								onClick={submitHandle}
							>
								{submit}
							</button>
						</div>
					)}
				</div>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		editItem: (list) => dispatch({ type: 'EDIT_ITEM', payload: list }),
	};
};

export default connect(null, mapDispatchToProps)(BoardList);
