import React, { useContext, useEffect, useState } from 'react'
import { TicTacToeContext } from '../TicTacToeContext'
import Board from '../components/Board'

const GameHistory = () => {
  const [state, setState] = useContext(TicTacToeContext)
  const [objs, setObjs] = useState([])

  useEffect(() => {
    let tempArr = []
    for (let i = 0; i < state.boardHistory.length; i++) {
      const board = state.boardHistory[i]
      const winner = state.winnerHistory[i]
      const loser = state.loserHistory[i]

      tempArr.push({
        boardHistory: board,
        winner: winner,
        loser: loser,
      })
    }

    setObjs(tempArr)
  }, [state])

  return (
    <div>
      <h1 className="title">Game History</h1>
      <div className="container">
        {objs && objs.length > 0
          ? objs?.map((obj, index) => {
            return (
              <div key={index} className="board-item">
                <p>Game {index + 1}</p>
                <p>Winner : {obj?.winner}</p>
                <p>Loser : {obj?.loser} </p>
                {obj.boardHistory.length > 0 ? (
                  <Board board={obj.boardHistory} />
                ) : (
                  ''
                )}
              </div>
            )
          })
          : <div>No Games Played, Please play your first game to see history</div>}
      </div>
    </div>
  )
}

export default GameHistory
