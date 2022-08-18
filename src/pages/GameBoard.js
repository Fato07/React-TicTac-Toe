import React, { useContext, useState } from 'react';
import Board from '../components/Board';
import { TicTacToeContext } from '../TicTacToeContext';

const GameBoard = () => {

 const WIN_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
 ];

 const [state, setState] = useContext(TicTacToeContext);
 const [board, setBoard] = useState(Array(9).fill(null));
 const [xPlaying, setXPlaying] = useState(true);

 const handleSquareClick = ();

 return (
  <>
   <div>{state.player1}{state.player2}</div>
   <Board board={board} />
  </>
 );
};

export default GameBoard;