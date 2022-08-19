import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TicTacToeContext } from '../TicTacToeContext';

const Home = () => {

 const [state, setState] = useContext(TicTacToeContext);
 let navigate = useNavigate();

 const startGame = () => {
  navigate("game-board");
 };

 return (
  <>

   <h1 className='home-title'>Enter Player Names</h1>
   <div className='home-container'>


    <div class="form__group">
     <input type="input" class="form__field" placeholder="Player 1" name="player1" id='player1' required onChange={(e) => setState(state => ({ ...state, player1: e.target.value }))} />

     <input type="input" class="form__field" placeholder="Player 2" name="player2" id='player2' required onChange={(e) => setState(state => ({ ...state, player2: e.target.value }))} />

     <button className='button' onClick={startGame}>Start Game 🥳</button>

    </div>
   </div>

  </>
 );
};

export default Home;