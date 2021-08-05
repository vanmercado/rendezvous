import { Route, Redirect } from 'react-router-dom';
import { getToken } from './Common';

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return !getToken() ? (
						<Component {...props} />
					) : (
						<Redirect to={{ pathname: '/dashboard' }} />
					);
				}}
			/>
		</div>
	);
};

export default PublicRoute;
