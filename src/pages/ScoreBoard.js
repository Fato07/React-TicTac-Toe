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
      <h3 id='xPlayer'>{state.xPlayer}</h3>
      <p id='xPlayer' class="px-3">{state.xScore}</p>
     </div>
     <div class="points ">
      <h3 id='oPlayer'>{state.oPlayer}</h3>
      <p id='oPlayer' class="px-3">{state.oScore}</p>
     </div>
    </div>
   </div>
  </>
 );
};

export default ScoreBoard;