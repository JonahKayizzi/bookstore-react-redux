import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, path: '/', text: 'Books' },
  { id: 2, path: '/categories', text: 'Categories' },
];

const Navbar = () => (
  <nav>
    <h1>Bookstore CMS</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} end>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
