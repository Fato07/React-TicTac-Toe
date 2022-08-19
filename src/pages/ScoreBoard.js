import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';

const ScoreBoard = () => {

 const [state, setState] = useContext(TicTacToeContext);
 return (
  <>
   <h1 className='title'>ScoreBoard</h1>
   <div class="scoreboard">
    <div class="points-container">
     <div class="points">
      <h3>{state.player1}</h3>
      <p id="home-points" class="px-3">{state.xScore}</p>
     </div>
     <div class="points ">
      <h3>{state.player2}</h3>
      <p id="guest-points" class="px-3">{state.oScore}</p>
     </div>
    </div>
   </div>
  </>
 );
};

export default ScoreBoard;