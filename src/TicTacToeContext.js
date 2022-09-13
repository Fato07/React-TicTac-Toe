import React, { useState } from 'react';
import { initialGameState } from './Util.js';

const TicTacToeContext = React.createContext([{}, () => { }]);

const TicTacToeProvider = (props) => {

 const [state, setState] = useState(initialGameState);

 return (
  <TicTacToeContext.Provider value={[state, setState]}>
   {props.children}
  </TicTacToeContext.Provider>
 );
};

export { TicTacToeContext, TicTacToeProvider };

