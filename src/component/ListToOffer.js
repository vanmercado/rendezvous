import './ListToOffer.css';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

const ListToOffer = ({ offer }) => {
	let url = '/viewreviews/' + offer.name.toLowerCase().replace(/\s/g, '');

	return (
		<div className='converge'>
			<div className='converge-div'>
				<div className='converge-img'>
					<img src={offer.image} alt='photo' />
				</div>
				<div className='converge-names'>
					<p className='offer-type'>{offer.type}</p>
					<Link to={url} className='a-offer-name'>
						<p className='offer-name '>{offer.name}</p>
					</Link>

					<p>{offer.address}</p>
				</div>
			</div>
			<div className='converge-cost'>
				<div className='div1-inner'>
					<p>Cost for Two:</p>
				</div>
				<div className='div2-inner'>
					<p className='offer-cost'>{offer.cost}</p>
				</div>
			</div>
			<div className='converge-hours'>
				<div className='div1-inner'>
					<p>Opening Hours:</p>
				</div>
				<div className='div2-inner'>
					<p className='offer-hours'>{offer.hours}</p>
				</div>
			</div>

			<Link to={url} id='a-view-btn'>
				<div className='converge-view-btn'>View Reviews</div>
			</Link>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		viewReview: (offer) => dispatch({ type: 'VIEW_REVIEW', payload: offer }),
	};
};
export default connect(null, mapDispatchToProps)(ListToOffer);
