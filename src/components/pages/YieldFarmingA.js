import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MenuPanel from '../common/MenuPanel';

export default function YieldFarmingA() {
	const [overViewMenuItems, setOverViewMenuItems] = useState([]);
	const [balancedDetails, setBalancedDetails] = useState({
		lpdx: 0,
		apr: 0,
		stakedSince: 0,
		pdxRewards: 0,
		ethRewards: 0,
	});

	useEffect(() => {
		// Set everything for initial load
		setOverViewMenuItems(['test']);
		setBalancedDetails({
			lpdx: 12,
			apr: 15762,
			stakedSince: 1723,
			pdxRewards: 3213,
			ethRewards: 333,
		});
	}, []);

	const handleOverviewMenuSelection = (option) => {};
	return (
		<Grid container spacing={1} className=''>
			<Grid item md={8.5} className='p-0'></Grid>
			<Grid item md={3.5} className='p-0'>
				<div className='container-card'>
					<div className='grey-card'>
						<div className='app-flex justify-content-space-between white-bottom-border card-padding'>
							<Typography variant='h4'>
								Overview
							</Typography>
							<MenuPanel
								menuItems={overViewMenuItems}
								onSelection={
									handleOverviewMenuSelection
								}
							/>
						</div>
						<div className='card-padding'>
							<div className='dark-grey-card'></div>
						</div>
					</div>
				</div>
			</Grid>
		</Grid>
	);
}
