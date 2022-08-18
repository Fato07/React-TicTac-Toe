import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';

const ScoreBoard = () => {

 const [state, setState] = useContext(TicTacToeContext);
 return (
  <>
   <h1>ScoreBoard</h1>
   {state.games.map(game => {
    <div>
     {game.player1}
    </div>;
   })}
  </>
 );
};

export default ScoreBoard;