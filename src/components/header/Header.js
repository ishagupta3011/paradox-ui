import Grid from '@mui/material/Grid';
import React from 'react';
import AppLogo from './AppLogo';

function HamburgerIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='36px'
			viewBox='0 0 24 24'
			width='36px'
			fill='#ffffff'>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
		</svg>
	);
}

export default function Header(props) {
	const { handleSideNavClick, open } = props;

	return (
		<div className='header-container'>
			<Grid container spacing={2} alignItems='center'>
				{!open && (
					<Grid
						item
						className='cursor-pointer'
						onClick={() => handleSideNavClick(true)}>
						<HamburgerIcon />
					</Grid>
				)}
				<Grid item xs={8}>
					<AppLogo />
				</Grid>
			</Grid>
		</div>
	);
}
