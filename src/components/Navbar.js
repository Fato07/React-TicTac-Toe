import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
  <div>
   <li>
    <Link to="/game-board">Game Board</Link>
   </li>
   <li>
    <Link to="/score-board">Score Board</Link>
   </li>
  </div >
 );
};

export default Navbar;