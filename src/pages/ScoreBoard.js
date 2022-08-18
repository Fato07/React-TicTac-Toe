import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';

const ScoreBoard = () => {

 const [state, setState] = useContext(TicTacToeContext);
 return (
  <>
   <h1>ScoreBoard</h1>
   <p>{state.player1} : {state.xScore}</p>
   <p>{state.player2} : {state.oScore}</p>
  </>
 );
};

export default ScoreBoard;