import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';
const ScoreBar = ({ xPlaying }) => {

 const [state, setState] = useContext(TicTacToeContext);

 return (
  <div className="scorebar">
   <span className={`score x-score ${!xPlaying && "inactive"}`}>{state.xPlayer} - {state.xScore}</span>
   <span className={`score o-score ${xPlaying && "inactive"}`}>{state.oPlayer} - {state.oScore}</span>
  </div>
 );
};

export default ScoreBar;