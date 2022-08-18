import React from 'react';
import Square from './Square';

const Board = ({ board, onClick }) => {
 return (
  <div className='board'>
   {board.map((value, id) => {
    return (
     <Square value={value} onClick={() => value === null && onClick(id)} />
    );
   })}

  </div>
 );
};

export default Board;