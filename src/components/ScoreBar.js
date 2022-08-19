import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';
const ScoreBar = ({ xPlaying }) => {

 const [state, setState] = useContext(TicTacToeContext);

 return (
  <div className="scoreboard">
   <span className={`score x-score ${!xPlaying && "inactive"}`}>{state.player1} - {state.xScore}</span>
   <span className={`score o-score ${xPlaying && "inactive"}`}>{state.player2} - {state.oScore}</span>
  </div>
 );
};

export default ScoreBar;