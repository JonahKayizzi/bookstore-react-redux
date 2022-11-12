import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { id: 1, path: '/', text: 'BOOKS' },
  { id: 2, path: '/categories', text: 'CATEGORIES' },
];

const Navbar = () => (
  <nav className="flex-row">
    <h1>Bookstore CMS</h1>
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <NavLink to={link.path} activeClassName="active-link" end>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
