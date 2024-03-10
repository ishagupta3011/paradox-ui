import { Typography } from '@mui/material';
import React from 'react';
import ProgressBar from './ProgressBar';

export default function ValueCard(props) {
	const {
		icon,
		title,
		isTitleHighlighted,
		showAmountLabels,
		showOnlyAmount,
		showOnlyProgressBar,
		showAmountAndProgressBar,
		amount,
		progress,
		pdx,
		eth,
		widthClass,
	} = props;

	return (
		<div
			className={`container-card ${widthClass} p-2 value-card-height app-flex-col`}>
			<div className='app-flex gap-2'>
				<div className='white-bg-circle'>{icon}</div>
				<Typography variant={isTitleHighlighted ? 'h4' : 'h4Grey'}>
					{title}
				</Typography>
			</div>
			<div>
				{showOnlyAmount && (
					<Typography variant='h4Light'>
						{'$'}
						{amount}
					</Typography>
				)}
				{showOnlyProgressBar && <ProgressBar progress={progress} />}
				{showAmountAndProgressBar && (
					<div className='app-flex justify-content-space-between'>
						<Typography variant='h4Light'>
							{'$'}
							{amount}
						</Typography>
						<ProgressBar progress={progress} />
					</div>
				)}
				{showAmountLabels && (
					<div>
						<div className='app-flex justify-content-space-between'>
							<Typography variant='subtitle2'>
								PDX
							</Typography>
							<Typography variant='subtitle2'>
								ETH
							</Typography>
						</div>
						<div className='app-flex justify-content-space-between'>
							<Typography variant='h4Light'>
								{'$'}
								{pdx}
							</Typography>
							<Typography variant='h4Light'>
								{'$'}
								{eth}
							</Typography>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
