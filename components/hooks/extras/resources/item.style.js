module.exports = name => `.${name} {
	min-width: 220px;
	p {
		font-size: 16px;
		span {
			font-weight: 600;
		}
	}
	div {
		display: flex;
		button[tab='edit'] {
			margin-right: 5px;

			margin-left: auto;

			color: #f8f9fa;

			background: #17a2b8;
		}
		button[tab='delete'] {
			color: #f8f9fa;

			background: #dc3545;
		}
	}
}
`