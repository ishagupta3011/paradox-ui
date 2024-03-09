import Activity from '../components/icons/Activity';
import Charts from '../components/icons/Charts';
import Folder from '../components/icons/Folder';
import Home from '../components/icons/Home';
import User from '../components/icons/User';
import YieldFarming from '../components/icons/YieldFarming';

export const DRAWER_WIDTH = 100;

export const MENU_ITEMS = [
	{
		item: 'a',
		icon: <Home />,
		activeIcon: <Home color={'active'} />,
		navPath: '/',
	},
	{
		item: 'b',
		icon: <YieldFarming />,
		activeIcon: <YieldFarming color={'active'} />,
		navPath: '/yield-farming-a',
	},
	{
		item: 'c',
		icon: <Charts />,
		activeIcon: <Charts color={'active'} />,
		navPath: '/yield-farming-b',
	},
	{
		item: 'd',
		icon: <User />,
		activeIcon: <User color={'active'} />,
		navPath: '/onboarding',
	},
	{
		item: 'e',
		icon: <Activity />,
		activeIcon: <Activity color={'active'} />,
		navPath: '/',
	},
	{
		item: 'f',
		icon: <Folder />,
		activeIcon: <Folder color={'active'} />,
		navPath: '/',
	},
];
