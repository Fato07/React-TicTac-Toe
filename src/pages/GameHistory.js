import React, { useContext } from 'react';
import { TicTacToeContext } from '../TicTacToeContext';
import { useNavigate } from 'react-router-dom';
import Board from '../components/Board';

const GameHistory = () => {
 const [state, setState] = useContext(TicTacToeContext);

 return (
  <div>
   <h1 className="title">Previously Played Games</h1>
   <div className="container">
    {state.history.map((board, index) => {
     return (
      <div key={index} className="board-item">
       <p>
        Game {index + 1}
       </p>
       <Board board={board} />
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default GameHistory;
