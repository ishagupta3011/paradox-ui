import React, { useState,useEffect } from 'react';

import reserveLogo from '../../images/reserve.svg';

import '../../styles/dashboard-style.scss';

export default function Dashboard() {
	const [liquidityBridgeData, setLiquidityBridgeData]= useState([]);

	const [riskFactorData, setRiskFactorData] =useState([]);

	useEffect(()=>{
		// write logic to set liuidity bridgeData
		setLiquidityBridgeData([
			{depositAPR:'Transforming illiquid NFTs into liquid ERC-20 assets',
			borrowAPR:'Interest to be prided',
			percentValue:'11.82%',},
			{depositAPR:'Transforming illiquid NFTs into liquid ERC-20 assets',
			borrowAPR:'Interest to be prided',
			percentValue:'11.82%',},
			{depositAPR:'Transforming illiquid NFTs into liquid ERC-20 assets',
			borrowAPR:'Interest to be prided',
			percentValue:'11.82%',}
		]);

		//write logic to set riskFactorData

		setRiskFactorData([{
			nftIconUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=monsterid&r=x',
			nftId:'24677',
			nftRiskFactor:'1.03',
			nftName:'MAYC'
		},
		{
			nftIconUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=robohash&r=x',
			nftId:'24677',
			nftRiskFactor:'1.03',
			nftName:'KODA'
		},
		{
			nftIconUrl:'https://gravatar.com/avatar/bbfdb9bbd0c011978359c4d7b498d8de?s=400&d=identicon&r=x',
			nftId:'24677',
			nftRiskFactor:'1.04',
			nftName:'MAYC'
		}])
	},[])

	const depositNFTHandler=()=>{
		console.log("deposit NFT Handler called");
	}
	return <main>
	<div className='second-section'>
		<div className='nft-bridge-card'>
		<div className='header'>NFT liquidity bridge</div>
		<div className='bridge-content'>
		<div className='left-panel'>
			<img src= {reserveLogo}></img>
			<div className='reserve-text'>Reserve</div>
		</div>
		<div className='right-panel'>
			<div className='right-panel-header'>
				<div className='w-50'>Deposit APR</div>
				<div className='w-50'>Borrow APR</div>
				<div className='w-10'></div>
			</div>
			
			{ liquidityBridgeData.length>0?<div className='data-container'>
			{
				liquidityBridgeData.map((data)=>{
				return <div className='data'>
						<div className='w-50'>{data.depositAPR}</div>
						<div  className='w-50 borrow-apr'>{data.borrowAPR}</div>
						<div className='w-10 percent-text'>{data.percentValue}</div>
					</div>
					})
				}
			</div> :null
}
			<div className='deposit-btn'><button onClick={()=>depositNFTHandler()}>Deposit NFTs</button></div>
		</div>
		</div>
		</div>
		<div className='risk-factor'> 
		<div className='header'>Risk factor</div>
		{
			riskFactorData.length>0 ?<div className='risk-factor-content'>
				{riskFactorData.map((data)=>{
					return <div className='row-data'>
						<div className='nft-details'>
						<img src={data.nftIconUrl}></img>
						<div className='info'>
							<div className='name'>{data.nftName}</div>
						<div className='risk-factor-id'>#{data.nftId}</div>
						</div>
						</div>
						<div className='risk-factor-data'>
						<div className='risk-factor-heading'> Risk factor</div>
						<div className='risk-factor-value'><div class="black-dot"></div>{data.nftRiskFactor}</div>
						</div>
					</div>
				})}
			</div>:null
		}
		</div>
		</div>
		</main>
}
