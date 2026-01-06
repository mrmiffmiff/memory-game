import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import objects from './util/objects';
import shuffle from './util/shuffle'
import InfoScreen from './components/InfoScreen';

const GameStates = Object.freeze({
  UNSTARTED: 'UNSTARTED',
  PLAYING: 'PLAYING',
  WON: 'WON',
});

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [answers, setAnswers] = useState(new Set());
  const [gameState, setGameState] = useState(GameStates.UNSTARTED)

  // Shuffle on every render from initial list - state unneeded, even does it initially
  const deck = shuffle(objects);

  function resetGame() {
    if (score > highScore) setHighScore(score);
    setAnswers(new Set());
    setScore(0);
  }

  function addPoint(obj) {
    setScore(score + 1);
    setAnswers(new Set([...answers, obj]));
    if (score + 1 >= objects.length) setGameState(GameStates.WON);
  }

  function evalClick(obj) {
    if (answers.has(obj)) resetGame();
    else addPoint(obj);
  }

  function startGame() {
    resetGame();
    setGameState(GameStates.PLAYING);
  }

  if (gameState !== GameStates.PLAYING) {
    return (
      <InfoScreen
        gameState={gameState}
        GameStates={GameStates}
        startFunction={startGame}
      />
    )
  }

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
      />
      <div className='cards'>
        {
          deck.map((card) => (
            <Card
              key={card.id}
              obj={card}
              reaction={evalClick}
            />
          ))
        }
      </div >
    </>
  )
}

export default App
