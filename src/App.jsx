import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
      />
    </>
  )
}

export default App
