import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/amharic" activeStyle>
			Amharic
		</NavLink>
		<NavLink to="/swahili" activeStyle>
			Swahili
		</NavLink>
		<NavLink to="/about" activeStyle>
			About
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
