import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Card from './components/Card';
import objects from './util/objects';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
      />
      <Card
        obj={objects[0]}
      />
    </>
  )
}

export default App
