import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TicTacToeContext } from '../TicTacToeContext';
import Typist from 'react-typist';

const Home = () => {

 const [state, setState] = useContext(TicTacToeContext);
 let navigate = useNavigate();

 const startGame = () => {
  navigate("game-board");
 };

 return (
  <>
   <Typist className="lead" cursor={{ show: false }}>
    <h1 className='home-title'>Welcome To A Game of TicTacToe</h1>
   </Typist>


   <div className='home-container'>
    <h3 className='home-title'>Enter Player Names To Begin</h3>

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