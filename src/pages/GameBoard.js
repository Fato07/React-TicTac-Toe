import React, { useContext, useState } from 'react';
import Board from '../components/Board';
import ScoreBar from '../components/ScoreBar';
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
  [2, 4, 6],
 ];

 const [state, setState] = useContext(TicTacToeContext);
 const [board, setBoard] = useState(Array(9).fill(null));
 const [xPlaying, setXPlaying] = useState(true);
 const [gameOver, setGameOver] = useState(false);

 const findWinner = (board) => {
  for (let i = 0; i < WIN_CONDITIONS.length; i++) {
   const [x, y, z] = WIN_CONDITIONS[i];

   // Iterate through win conditions and check if either player satisfies them
   if (board[x] && board[x] === board[y] && board[y] === board[z]) {
    setGameOver(true);
    return board[x];
   }
  }
 };

 const handleSquareClick = (squareId) => {
  // Step 1: Update the board
  const updatedBoard = board.map((value, id) => {
   if (id === squareId) {
    return xPlaying ? 'X' : 'O';
   } else {
    return value;
   }
  });
  setBoard(updatedBoard);

  // Step 2: Check if either player has won the game
  const winner = findWinner(updatedBoard);
  if (winner) {
   if (winner === 'O') {
    state.oScore += 1;
    saveGameState(updatedBoard, winner);
   } else {
    state.xScore += 1;
    saveGameState(updatedBoard, winner);
   }
  }

  // Step 3: Change active player
  setXPlaying(!xPlaying);
 };

 const resetBoard = () => {
  setGameOver(false);
  setBoard(Array(9).fill(null));
  checkPreviousWinner();
 };

 const saveGameState = (updatedBoard, winner) => {

  let players = [];
  players.push(state.xPlayer, state.oPlayer);

  let winnerName = "";
  let loserName = "";

  if (winner === 'X') {
   winnerName = state.xPlayer;
   loserName = state.oPlayer;
  } else {
   winnerName = state.oPlayer;
   loserName = state.xPlayer;
  }

  setState((state) => ({
   ...state,
   oScore: state.oScore,
   xScore: state.xScore,
   boardHistory: [...state.boardHistory, updatedBoard],
   playerHistory: [...state.playerHistory, players],
   winnerHistory: [...state.winnerHistory, winnerName],
   loserHistory: [...state.loserHistory, loserName]
  }));
 };

 const checkPreviousWinner = () => {
  const prevWinner = state.winnerHistory[state.winnerHistory.length - 1];
  const prevLoser = state.loserHistory[state.loserHistory.length - 1];
  setState(state => ({ ...state, xPlayer: prevWinner, oPlayer: prevLoser }));
 };

 return (
  <>
   <ScoreBar xPlaying={xPlaying} />
   <Board
    board={board}
    onClick={gameOver ? resetBoard : handleSquareClick}
   />
   <div className='center'>
    <button className='button' onClick={resetBoard}>Reset Board</button>
   </div>
  </>
 );
};

export default GameBoard;
