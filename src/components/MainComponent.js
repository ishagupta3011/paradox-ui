import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';
import YieldFarmingA from './pages/YieldFarmingA';
import YieldFarmingB from './pages/YieldFarmingB';

export default function MainComponent() {
	return (
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/yield-farming-a' element={<YieldFarmingA />} />
			<Route path='/yield-farming-b' element={<YieldFarmingB />} />
			<Route path='/onboarding' element={<Onboarding />} />
		</Routes>
	);
}
