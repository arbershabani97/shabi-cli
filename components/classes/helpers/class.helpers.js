const stateString = (val) => {
	if (!val) return "";
	return `
    state={

    };
`;
};
const componentDidMountString = (val) => {
	if (!val) return "";
	return `
    componentDidMount() {

    }
`;
};
const componentDidUpdateString = (val) => {
	if (!val) return "";
	return `
    componentDidUpdate(prevProps, prevState) {
        if (this.props.userID !== prevProps.userID) {
            // Action
        }
    }
`;
};
module.exports = {stateString, componentDidMountString, componentDidUpdateString};
