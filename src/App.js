import './sass/_app.scss';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import GameBoard from './pages/GameBoard';
import ScoreBoard from './pages/ScoreBoard';
import { TicTacToeProvider } from './TicTacToeContext';
import Navbar from './components/Navbar';

function App() {
  return (
    <TicTacToeProvider>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="game-board" element={<GameBoard />} />
        <Route path="score-board" element={<ScoreBoard />} />
      </Routes>
    </TicTacToeProvider>
  );
}

export default App;
