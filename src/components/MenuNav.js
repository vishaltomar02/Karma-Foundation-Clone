import React, { useState } from 'react';
import KarmaFoundationLogo from '../images/karma-logo.jpg'

const navOptions = [
  { name: 'Home' },
  { name: 'About Us' },
  { name: 'Vision & Mission' },
  { name: 'Contact Us' },
  { name: 'Become A Volunteer' }
]

const MenuNav = () => {
  const [selectedNav, setSelectedNav] = useState('Home');

  const activeNavItem = (name) => {
    setSelectedNav(name);
  };

  return (
    <div className="menu-nav">
      <section className="menu-nav-inner">
        <a className="logo-container" href=" ">
          <img style={{ height: '100px', width: '100px' }} src={KarmaFoundationLogo} alt="Karma Foundation" />
        </a>
        <ul className="nav-options-container">
          {navOptions.map((item) => {
            return (
              <li key={item.name} className={`nav-option ${item.name === selectedNav ? 'active' : ''}`} onClick={() => activeNavItem(item.name)}>
                {//eslint-disable-next-line
                  <a href="#">{item.name}</a>}
              </li>
            );
          })}
        </ul>
        <div className="nav-buttons">
          <button className="shadow-buttons" style={{ marginRight: '10px' }}>Donate Now</button>
          <button className="shadow-buttons">Login</button>
        </div>
      </section>
    </div>
  );
}

export default MenuNav;