import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DRAWER_WIDTH } from '../constants/sideNavConstants';
import Header from './header/Header';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import YieldFarmingA from './pages/YieldFarmingA';
import YieldFarmingB from './pages/YieldFarmingB';
import SideNav from './side-navigation/SideNav';

export default function MainComponent() {
	const [showSideNav, setShowSideNav] = useState(false);
	const [totalRevenue, setTotalRevenue] = useState(0);
	const [totalValue, setTotalValue] = useState('$136,841');

	useEffect(() => {
		// TO DO: Set the total revenue and total value here
	}, []);

	const Main = styled('main', {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${DRAWER_WIDTH}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}));

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== 'open',
	})(({ theme, open }) => ({
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			width: `calc(100% - ${DRAWER_WIDTH}px)`,
			marginLeft: `${DRAWER_WIDTH}px`,
			transition: theme.transitions.create(['margin', 'width'], {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	}));

	const handleSideNavClick = (val) => {
		setShowSideNav(val);
	};

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position='fixed' open={showSideNav}>
				<Header
					handleSideNavClick={handleSideNavClick}
					open={showSideNav}
					totalRevenue={totalRevenue}
					totalValue={totalValue}
				/>
			</AppBar>
			<SideNav
				open={showSideNav}
				handleSideNavClick={handleSideNavClick}
			/>
			<Main open={showSideNav}>
				<DrawerHeader />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route
						path='/yield-farming-a'
						element={<YieldFarmingA />}
					/>
					<Route
						path='/yield-farming-b'
						element={<YieldFarmingB />}
					/>
					<Route path='/onboarding' element={<Onboarding />} />
				</Routes>
			</Main>
		</Box>
	);
}
