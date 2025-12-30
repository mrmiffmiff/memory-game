import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <h1>Memory Game</h1>
      <h2>There will be scores</h2>
    </>
  )
}

export default App
