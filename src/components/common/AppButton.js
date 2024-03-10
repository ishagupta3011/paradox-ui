import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import * as React from 'react';

export default function AppButton(props) {
	const { text, variant, endIcon, clickHandler, borderRadius, minWidth } =
		props;

	const BootstrapButton = styled(Button)({
		boxShadow: 'none',
		textTransform: 'none',
		fontSize: 16,
		padding: '6px 12px',
		border: '1px solid',
		lineHeight: 1.5,
		backgroundColor: '#161717',
		borderColor: variant === 'outlined' ? '#ffffff' : '#161717',
		borderRadius: borderRadius || 4,
		minWidth: minWidth || '25.75rem',
		minHeight: '2.75rem',
		color: '#ffffff',
		fontFamily: ['Courier Prime'].join(','),
		'&:hover': {
			backgroundColor: 'rgb(146, 146, 146, 0.3)',
			borderColor: 'rgb(146, 146, 146, 0.3)',
			borderColor: variant === 'outlined' ? '#ffffff' : '#161717',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: 'rgb(146, 146, 146, 0.3)',
			borderColor: variant === 'outlined' ? '#ffffff' : '#161717',
			borderColor: 'rgb(146, 146, 146, 0.3)',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(146, 146, 146, .5)',
		},
	});

	return (
		<BootstrapButton
			variant={variant || 'contained'}
			disableRipple
			endIcon={endIcon}
			onClick={clickHandler}>
			{text}
		</BootstrapButton>
	);
}
