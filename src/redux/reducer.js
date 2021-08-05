import Converge from '../Converge.js';

const initialState = {
	ShopList: [
		'Casual Dining',
		'Quick Bites',
		'Cafes',
		'Drinks and Nightlife',
		'Allday Breakfast',
		'Desserts and Bakes',
		'Buffet',
	],
	selected: 'Login',
	Overview: 'Overview',
	editItem: null,
	admin: 'active',
};

const reducer = (state = initialState, action) => {
	let tab;
	switch (action.type) {
		case 'SELECT_TAB':
			tab = action.payload;

			return {
				...state,
				selected: tab,
			};

		case 'SELECT_TAB_OVERVIEW':
			tab = action.payload;

			return {
				...state,
				Overview: tab,
			};

		case 'EDIT_ITEM':
			return {
				...state,
				editItem: action.payload,
			};

		default:
			return state;
	}
};
export default reducer;
