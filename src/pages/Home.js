import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TicTacToeContext } from '../TicTacToeContext'
import Typist from 'react-typist'
import { initialGameState } from '../Util.js'

const Home = () => {
  const [state, setState] = useContext(TicTacToeContext)
  let navigate = useNavigate()

  const startNewGame = () => {
    setState(initialGameState);
    navigate('game-board')
  };

  return (
    <>
      <Typist className="lead" cursor={{ show: false }}>
        <h1 className="home-title">Welcome To A Game of TicTacToe</h1>
      </Typist>

      <div className="home-container">
        <h3 className="home-title">Enter Player Names To Begin</h3>

        <div class="form__group">
          <input
            type="input"
            class="form__field"
            placeholder="Player X Name"
            name="xPlayer"
            id="xPlayer"
            required
            onChange={(e) =>
              setState((state) => ({ ...state, xPlayer: e.target.value }))
            }
          />

          <input
            type="input"
            class="form__field"
            placeholder="Player O Name"
            name="oPlayer"
            id="oPlayer"
            required
            onChange={(e) =>
              setState((state) => ({ ...state, oPlayer: e.target.value }))
            }
          />

          <button className="button" onClick={startNewGame}>
            Start New Game 🥳
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
