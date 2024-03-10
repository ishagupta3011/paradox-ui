import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import React from 'react';

export default function AmountCard(props) {
	const { amount, balance, tagName, showChip, chipLabel } = props;

	return (
		<div className='black-gradient-card'>
			<div className='app-flex justify-content-space-between mb-0-5'>
				<Typography variant='overline'>Amount</Typography>
				<Typography variant='overline'>
					Balance: {balance}
				</Typography>
			</div>
			<div className='app-flex justify-content-space-between'>
				<Typography variant='overline'>{amount}</Typography>
				<div className='app-flex'>
					{showChip && (
						<Chip
							label={chipLabel}
							sx={{
								height: 'auto',
								backgroundColor: '#ffffff',
								'& .MuiChip-label': {
									fontSize: '1.25rem',
									color: '#161717',
								},
							}}
						/>
					)}
					<Typography variant='h5'>{tagName}</Typography>
				</div>
			</div>
		</div>
	);
}
