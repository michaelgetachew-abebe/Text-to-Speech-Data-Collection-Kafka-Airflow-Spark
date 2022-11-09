import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #DEE1E5;
height: 0px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
`;

export const NavLink = styled(Link)`
color: #09203B;
display: flex;
align-items: bottom;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #09203B;
}
font-weight: Bold;
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: left;
margin-right: -24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;
