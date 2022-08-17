import './sass/_app.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import GameBoard from './pages/GameBoard';
import ScoreBoard from './pages/ScoreBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="game-board" element={<GameBoard />} />
        <Route path="score-board" element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}

export default App;
