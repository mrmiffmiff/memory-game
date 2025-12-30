import '../styles/Header.css'

export default function Header({ score, highScore }) {
    return (
        <header>
            <h1>Memory Game</h1>
            <div className="scores">
                <span className="score">Score: {score}</span>
                <span className="high-score">High Score: {highScore}</span>
            </div>
        </header>
    )
}