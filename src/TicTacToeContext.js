import React, { useState } from 'react';

const TicTacToeContext = React.createContext([{}, () => { }]);

const TicTacToeProvider = (props) => {
 const [state, setState] = useState({});
 return (
  <TicTacToeContext.Provider value={[state, setState]}>
   {props.children}
  </TicTacToeContext.Provider>
 );
};

export { TicTacToeContext, TicTacToeProvider };