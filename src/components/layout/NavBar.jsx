import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Header, NavIcon, NavContent, CloseMenu } from "./NavBar.style";
import logo from '../../assets/logo.png';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Header>
      <div className="logo">
        <Link to='/'>
          <img src={logo} alt="Logo"/>
        </Link>
      </div>

      <NavIcon onClick={handleClick}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </NavIcon>

      <NavContent open={isMenuOpen} onClick={handleClick}>
        <div className='list'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/exercise'>Exercise</Link>
            </li>
            <li>
              <Link to='/recipes'>Recipes</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </NavContent>

      <CloseMenu open={isMenuOpen} onClick={handleClick} />
    </Header>
  );
};

export default NavBar;