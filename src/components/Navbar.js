import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
  <div>
   <nav className='nav'>
    <li className='nav-item'>
     <Link to="/">Home Page</Link>
    </li>
    <li className='nav-item'>
     <Link to="/game-board">Game Board</Link>
    </li>
    <li className='nav-item'>
     <Link to="/score-board">Score Board</Link>
    </li>
    <li className='nav-item'>
     <Link to="/history">History</Link>
    </li>
   </nav>

  </div >
 );
};

export default Navbar;