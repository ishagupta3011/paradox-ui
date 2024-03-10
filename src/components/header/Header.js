import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import AppButton from '../common/AppButton';
import ProfileIcon from '../images/profileIcon.png';
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
	const { handleSideNavClick, open, totalRevenue, totalValue } = props;

	return (
		<div className='header-container'>
			<Grid
				container
				spacing={1}
				alignItems='center'
				justifyContent='space-between'>
				<Grid container spacing={1} alignItems='center' md={10}>
					<Grid
						item
						className='cursor-pointer'
						onClick={() => handleSideNavClick(!open)}>
						<HamburgerIcon />
					</Grid>
					<Grid item>
						<AppLogo />
					</Grid>
				</Grid>
				<Grid container spacing={1} alignItems='center' md={2}>
					<Grid item>
						<AppButton
							text={'Connect'}
							borderRadius={25}
							minWidth={'8.75rem'}
						/>
					</Grid>
					<Grid item>
						<div className='profile-wrapper'>
							<img src={ProfileIcon} alt='profile icon' />
						</div>
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={1}
				justifyContent='space-around'
				className='mt-1 pl-2 pb-1'>
				<Grid item md={8.8} className='p-0'>
					<Typography variant='h1'>
						Liquidity for NFTs
					</Typography>
					<Typography variant='body2'>
						Transferring illiquid <strong>NFTs</strong> into
						liquid <strong>ERC-20 assets</strong>
					</Typography>
					<div className='mt-5 grouped-button'>
						<AppButton
							text={'Get Started'}
							variant={'outlined'}
						/>
						<AppButton
							text={'On-boarding'}
							variant={'outlined'}
						/>
					</div>
				</Grid>
				<Grid item md={3.2}>
					<div className='gradient-card value-staked-card'>
						<Typography variant='subtitle1'>
							Total Value Staked
						</Typography>
						<Typography className='mb-2' variant='h2'>
							{totalValue}
						</Typography>
						<Typography variant='subtitle1'>
							Total Value Staked
						</Typography>
						<div className='app-flex align-items-baseline'>
							<Typography variant='h2'>
								{totalRevenue}
							</Typography>
							<Typography variant='h4'>
								{' ETH'}
							</Typography>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
