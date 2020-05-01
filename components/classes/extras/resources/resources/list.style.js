module.exports = name => `.${name} {
	display: flex;

	> *:not(:last-of-type) {
		margin-right: 15px;
	}
}
`;