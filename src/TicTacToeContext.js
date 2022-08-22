import React, { useState } from 'react';

const TicTacToeContext = React.createContext([{}, () => { }]);

const TicTacToeProvider = (props) => {

 const [state, setState] = useState({
  xPlayer: "Player 1",
  oPlayer: "Player 2",
  xScore: 0,
  oScore: 0,
  boardHistory: [], //stores boards history as arrrays
  playerHistory: [],
  winnerHistory: [],
  loserHistory: []
 });

 return (
  <TicTacToeContext.Provider value={[state, setState]}>
   {props.children}
  </TicTacToeContext.Provider>
 );
};

export { TicTacToeContext, TicTacToeProvider };

