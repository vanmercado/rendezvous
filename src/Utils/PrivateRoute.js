import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return getToken() ? (
						<Component {...props} />
					) : (
						<Redirect to={{ pathname: '/', state: { from: props.location } }} />
					);
				}}
			/>
		</div>
	);
};

export default PrivateRoute;
