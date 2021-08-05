import { connect } from 'react-redux';
import '../component/ListToOffer.css';

const TabNavs = ({ tabs, selected, setSelected, children }) => {
	return (
		<div className='tabnav'>
			<ul className='nav nav-tabs'>
				{tabs.map((tab) => {
					const active = tab === selected ? 'active' : '';
					return (
						<li className='nav-item-review' key={tab}>
							<a
								className={'nav-link ' + active}
								onClick={() => setSelected(tab)}
							>
								{tab}
							</a>
						</li>
					);
				})}
			</ul>
			{children}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSelected: (tab) =>
			dispatch({ type: 'SELECT_TAB_OVERVIEW', payload: tab }),
	};
};

export default connect(null, mapDispatchToProps)(TabNavs);
