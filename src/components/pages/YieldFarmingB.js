import React, { useEffect, useState } from 'react';
import AppButton from '../common/AppButton';
import '../../styles/yieldFarmingB.scss';
import StackedChartMUI from '../ui-card-components/muiChartComponent';

export default function YieldFarmingB() {
	const [liquidMiningData,setLiquidMiningData] = useState();

	useEffect(()=>{
		setLiquidMiningData({
			amount:123.00,
			balance:4500.00,
		})
	},[])
	return <div className="yeild-farming-b">
		<div className='liquidity-mining-card container-card'>
			<div className='heading app-flex justify-content-space-between'> 
			<div className='title'> Liquidty Mining</div>
			<div className='dropdown'></div>
			</div>
			<div className='details app-flex justify-content-space-between'>
				<div className='ammount'><div> Amount</div>
				<div>{liquidMiningData?.amount} </div></div>
				<div className='balance'> <div> Balance:{liquidMiningData?.balance}
				</div>
				<div></div></div>
			</div>
		</div>
		<div className='stake-btn'>
		<AppButton text={'Stake'} variant={'primary'} minWidth={'90%'} borderRadius={'2.5rem'} ></AppButton>

		<div className='stats-section app-flex justify-content-space-between'>
			<div className='chart-section w-50'>
				<div className='header'><div>Total value staked</div>
				<div>Recent</div>
				</div>
				<div className='chart'>  <StackedChartMUI></StackedChartMUI> </div>
			</div>
			<div className='statistics-section w-50'>
			<div className='header'><div>Statistics</div>
				<div>Recent</div>
				</div>
				<div className='stats'></div>
			</div>
		</div>
		</div>
	</div>;
}
