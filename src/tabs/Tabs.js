const Tabs = ({ isSelected, children }) => {
	if (isSelected) {
		return <div>{children}</div>;
	}
	return null;
};

export default Tabs;
