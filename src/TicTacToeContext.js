import React, { useState } from 'react';

const TicTacToeContext = React.createContext([{}, () => { }]);

const TicTacToeProvider = (props) => {

 const [state, setState] = useState({
  player1: "Fathin",
  player2: "Peter",
  xScore: 0,
  oScore: 0,
 });

 return (
  <TicTacToeContext.Provider value={[state, setState]}>
   {props.children}
  </TicTacToeContext.Provider>
 );
};

export { TicTacToeContext, TicTacToeProvider };