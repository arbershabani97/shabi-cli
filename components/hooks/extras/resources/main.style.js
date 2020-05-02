module.exports = name => `.${name} {
	margin: 10px;
	.header {
		display: flex;
		margin-bottom: 15px;
		button {
			padding: 5px 10px;
			border: 1px solid rgba(0, 0, 0, 0.02);
			border-radius: 3px;

			background: rgba(0, 0, 0, 0.1);
			&:first-of-type {
				border-radius: 3px 0 0 3px;
			}
			&:last-of-type {
				border-radius: 0 3px 3px 0;
			}
			&.active {
				background: rgba(0, 0, 0, 0.2);
			}
		}
	}
	input {
		display: block;
		margin-bottom: 5px;
		padding: 0.375rem 0.75rem;
		border: 1px solid #ced4da;
		border-radius: 0.25rem;

		color: #495057;
		font-size: 1rem;
		line-height: 1.5;

		background-color: #fff;
		background-clip: padding-box;
		&:first-of-type {
			margin-top: 10px;
		}
	}
	button {
		padding: 4px 8px;
		border: 0;

		border-radius: 3px;
	}
	form {
		display: flex;

		flex-direction: column;
		width: 220px;
		button[type='submit'] {
			align-self: flex-end;
			border: 0;
			border-radius: 3px;

			color: #f8f9fa;

			background-color: #0062cc;
		}
	}
	.box {
		display: flex;
		flex-direction: column;
		padding: 10px 16px;
		border: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 10px;
    }
    p {
		font-size: 16px;
		span {
			font-weight: 600;
		}
	}
}
`