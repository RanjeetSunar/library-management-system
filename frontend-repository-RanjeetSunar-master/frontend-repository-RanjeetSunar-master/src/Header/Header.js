import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import { Link } from 'react-scroll';

const Navbar = () => {
return (
	
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink exact to='/' activeStyle>
			HOME
		</NavLink>
		<NavLink to='/Aboutus' activeStyle>
			ABOUT US
		</NavLink>

		<NavLink to='/contactus' activeStyle>
			CONTACT
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/Login'>SIGN IN</NavBtnLink>
		<NavBtnLink to='/Register'>SIGN UP</NavBtnLink>
		</NavBtn>
	</Nav>
	
);
};

export default Navbar;
