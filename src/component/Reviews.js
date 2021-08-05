import React from 'react';
import TabNavs from '../tabs/NavReview';
import Tabs from '../tabs/Tabs';
import './ListToOffer.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Comment from './Comment';

const Reviews = ({ viewArray, Overview, admin }) => {
	const url = '/viewreviews/' + viewArray.name.toLowerCase().replace(/\s/g, '');
	return (
		<div>
			<section className='converge'>
				<div className='converge-div'>
					<div className='converge-img'>
						<img src={viewArray.image} alt='photo' />
					</div>
					<div className='converge-names'>
						<p className='offer-type'>{viewArray.type}</p>
						<Link to={url} className='a-offer-name'>
							<p className='offer-name '>{viewArray.name}</p>
						</Link>
						<p>{viewArray.address}</p>
						<div className='mt-4'>
							<button className='btn btn-warning mr-2'>👣 Been Here</button>
							<button className='btn btn-warning'>🍴 Must Try</button>
						</div>
					</div>
				</div>
			</section>{' '}
			<TabNavs tabs={['Overview', 'Review', 'Menu']} selected={Overview}>
				<div className='forms-inner-review'>
					<Tabs isSelected={Overview === 'Overview'}>
						<section className='converge overview mb-5'>
							<div className='converge-detail'>
								<div className='converge-detail-div'>
									<p className='converge-detail-p'> Average Cost</p>
								</div>
								<div className='div2-inner'>
									<p className='offer-cost'>{viewArray.cost}</p>
								</div>
							</div>
							<div className='converge-detail'>
								<div className='converge-detail-div'>
									<p className='converge-detail-p '>Opening Hours</p>
								</div>
								<div className='div2-inner'>
									<p className='offer-hours'>{viewArray.hours}</p>
								</div>
							</div>
							<div className='converge-detail'>
								<div className='converge-detail-div'>
									<p className='converge-detail-p'>Address</p>
								</div>
								<div className='div2-inner'>
									<p className='offer-hours'>{viewArray.address}</p>
								</div>
							</div>
						</section>
					</Tabs>
					<Tabs isSelected={Overview === 'Review'}>
						{admin === 'active' ? (
							<div>
								<Comment viewArray={viewArray} />
							</div>
						) : (
							<div className='mt-4 ml-4'>
								<button type='button' class='btn btn-outline-danger'>
									Login/Signup
								</button>
								<p className='ml-2 d-inline'> to add reviews</p>
							</div>
						)}
					</Tabs>
					<Tabs isSelected={Overview === 'Menu'}>
						<p className='mt-3 ml-3'>......</p>
					</Tabs>
				</div>
			</TabNavs>
		</div>
	);
};

const mapStateToProps = ({ Converge, Overview, admin }) => {
	return {
		Converge,
		Overview,
		admin,
	};
};

export default connect(mapStateToProps)(Reviews);
