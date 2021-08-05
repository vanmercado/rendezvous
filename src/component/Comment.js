import React from 'react';
import './ListToOffer.css';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const Comment = ({ viewArray }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<section className='container mb-5 mt-4'>
			<div>
				<h3>Reviews:</h3>
				<div className=''>
					<div className='review-box pt-2 pl-3 pr-3 mb-3'>
						<div className='border-bottom-box d-flex p-1 pb-3'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFMnHsTLE401IfgCNro8k45HlWR_tLIq2Ag&usqp=CAU'
								alt='photo'
								className='rounded-circle testuser-img'
							/>
							<div className='ml-5 review-box-name '>
								<p className='review-box-name'>Test-User 25 said:</p>
							</div>
						</div>
						<div className='p-3'>
							<p>
								Test-Review voluptatem, molestiae suscipit sint quos numquam
								vero quas sapiente iste possimus repellat pariatur deserunt.
							</p>
						</div>
					</div>
					{/* sample  */}
					<div className='review-box pt-2 pl-3 pr-3'>
						<div className='border-bottom-box d-flex p-1 pb-3'>
							<img
								src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96cCpXKpvnUxkQL0Nq_VA0w8eP32yJ4m-cf1JtuvpLtjs8mXmQviNZf4_jjs-Ym7UGgQ&usqp=CAU'
								alt='photo'
								className='rounded-circle testuser-img'
							/>
							<div className='ml-5 review-box-name '>
								<p className='review-box-name'>Test-User 32 said:</p>
							</div>
						</div>
						<div className='p-3'>
							<p>
								Test-Review ipsum dolor sit amet consectetur adipisicing elit.
								Iusto adipisci repudiandae tempore.
							</p>
						</div>
					</div>
					{/* sample  */}
				</div>
			</div>
			<div className='d-flex justify-content-end '>
				{/* <div className='mt-3'>
					<h6>Add Review</h6>
					<textarea className='d-block mb-3 p-2' cols='70' rows='4'></textarea>
					<button className='btn btn-warning'>Submit Review</button>
				</div> */}
				<button
					className='btn btn-danger mt-3'
					variant='primary'
					onClick={handleShow}
				>
					Add Reviews
				</button>

				<Modal show={show} onHide={handleClose} animation={false}>
					<Modal.Header closeButton>
						<div className='mr-4'>
							<img src={viewArray.image} alt='' />
						</div>
						<Modal.Title>
							<p>
								<small>{viewArray.type}</small>
							</p>
							<h4 className='text-danger'>{viewArray.name}</h4>
						</Modal.Title>
					</Modal.Header>
					<Modal.Body className='text-center'>
						<textarea
							className='pl-2 pr-2 pt-1 pb-1'
							cols='60'
							rows='5'
							required
						></textarea>
					</Modal.Body>
					<Modal.Footer>
						<button
							className='btn btn-secondary'
							variant='secondary'
							onClick={handleClose}
						>
							Close
						</button>
						<button
							className='btn btn-primary'
							variant='primary'
							onClick={handleClose}
						>
							Submit Review
						</button>
					</Modal.Footer>
				</Modal>
			</div>
		</section>
	);
};

export default Comment;
