import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = ({ item, markSuggested, markFollowing }) => {
	const updateBtnHandler = (_id) => {
		if (item.status === 'following') {
			axios
				.put('http://app-rendezvous.herokuapp.com/users/' + _id, {
					status: 'suggested',
				})
				.then((res) => {
					markSuggested(_id);
					alert(`You Remove ${item.name} from Foodies following`);
				});
		}
		if (item.status === 'suggested') {
			axios
				.put('http://app-rendezvous.herokuapp.com/users/' + _id, {
					status: 'following',
				})
				.then((res) => {
					markFollowing(_id);
					alert(`You are now following ${item.name}`);
				});
		}
	};

	return (
		<div className='card-text d-flex justify-content-between p-2 test-user'>
			<img
				className='user-picture'
				src={item.image}
				alt='user profile picture'
			/>
			<Link className='align-self-center text-info'>{item.name}</Link>
			{item.status === 'following' ? (
				<img
					className='user-del-btn align-self-center rounded-circle'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVYk50VPWhRe5uOoj9uJHz_VmKQvrT7iMveANtf90tFe5ZDfXdPhFTIpfXL376F9v6w4&usqp=CAU'
					alt='delete user button'
					onClick={() => updateBtnHandler(item._id)}
				/>
			) : (
				<img
					className='user-del-btn align-self-center rounded-circle'
					src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSkkp11xUuAO2kVWZMzzVPCE1KgYLVRSzQ5ojbeNhVx66BZ3rx8slMf8dsRfL0vGtaKc&usqp=CAU'
					alt='button icon'
					onClick={() => updateBtnHandler(item._id)}
				/>
			)}
		</div>
	);
};

export default Users;
