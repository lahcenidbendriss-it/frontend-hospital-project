import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div className='hero'>
      <nav>
        <div className='nav-container'>
          <h3 className='logo'>Delegation de la sante</h3>
          <ul>
            <li><Link to='/'>Add Info</Link></li>
            <li><Link to='/info'>Info</Link></li>
            <li><Link to='/updateinfo'>Update Info</Link></li>
          </ul>
          <button className='buuutn' type='button'><a href='/'>Logout</a></button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
