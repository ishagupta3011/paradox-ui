import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BALANCE_LIST } from '../../constants/yield-farming-constants';
import MenuPanel from '../common/MenuPanel';
import TransactionCard from '../common/TransactionCard';

export default function YieldFarmingA() {
	const [overViewMenuItems, setOverViewMenuItems] = useState([]);
	const [transactionItems, setTransactionItems] = useState([]);
	const [balancedDetails, setBalancedDetails] = useState({
		lpdx: 0,
		apr: 0,
		stakedSince: 0,
		pdxRewards: 0,
		ethRewards: 0,
	});
	const [transactionDetails, setTransactionDetails] = useState({
		uptrend: 0,
		downtrend: 0,
		count: 0,
	});

	useEffect(() => {
		// Set everything for initial load
		setOverViewMenuItems(['test']);
		setTransactionItems(['test']);
		setBalancedDetails({
			lpdx: 12,
			apr: 15762,
			stakedSince: 1723,
			pdxRewards: 3213,
			ethRewards: 333,
		});
		setTransactionDetails({
			uptrend: 14,
			downtrend: 12,
			count: 4,
		});
	}, []);

	const handleOverviewMenuSelection = (option) => {};

	const handleTransactionsItemSelection = (option) => {};

	return (
		<Grid container spacing={1} className=''>
			<Grid item md={8.5} className='p-0'></Grid>
			<Grid item md={3.5} className='p-0'>
				<div className='container-card'>
					<div className='grey-card mb-2'>
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
							<div className='dark-grey-card'>
								<div className='dark-grey-card-padding white-bottom-border-light'>
									<Typography variant='overline'>
										Your Balance
									</Typography>
								</div>
								<div className='card-padding'>
									{BALANCE_LIST.map((item) => (
										<div className='app-flex justify-content-space-between'>
											<Typography variant='overline'>
												{item.item}
											</Typography>
											<Typography variant='overline'>
												{
													balancedDetails[
														item
															.valueKey
													]
												}
											</Typography>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='app-flex justify-content-space-between'>
						<Typography variant='h4'>Transactions</Typography>
						<MenuPanel
							menuItems={transactionItems}
							onSelection={handleTransactionsItemSelection}
						/>
					</div>
					<TransactionCard
						title={'Bundle Created'}
						count={4}
						growth={`+${transactionDetails.uptrend}%`}
						isPositive={true}
						icon={'stacked'}
					/>
					<TransactionCard
						title={'Dispersed'}
						count={transactionDetails.count}
						growth={`-${transactionDetails.downtrend}%`}
						isPositive={false}
						icon={'trend'}
					/>
				</div>
			</Grid>
		</Grid>
	);
}
