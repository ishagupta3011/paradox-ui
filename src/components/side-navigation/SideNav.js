import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DRAWER_WIDTH, MENU_ITEMS } from '../../constants/sideNavConstants';
import logo from './HeaderLogo.png';

export default function SideNav(props) {
	const navigate = useNavigate();

	const { open, handleSideNavClick } = props;

	const [isActive, setIsActive] = useState('a');

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	}));

	const handleMenuItemClick = (item) => {
		setIsActive(item.item);
		navigate(item.navPath);
	};

	return (
		<Drawer
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: DRAWER_WIDTH,
					boxSizing: 'border-box',
				},
			}}
			variant='persistent'
			anchor='left'
			open={open}>
			<DrawerHeader
				className='cursor-pointer'
				onClick={() => handleSideNavClick(false)}>
				<img src={logo} alt='header logo' />
			</DrawerHeader>
			<Divider />
			<List>
				{MENU_ITEMS.map((menu) => (
					<ListItem key={menu.item} disablePadding>
						<ListItemButton>
							<ListItemIcon
								onClick={() =>
									handleMenuItemClick(menu)
								}
								className={`justify-content-center menu-icon-wrapper ${
									isActive === menu.item
										? 'active-menu-item'
										: ''
								}`}>
								{isActive === menu.item
									? menu.activeIcon
									: menu.icon}
							</ListItemIcon>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
