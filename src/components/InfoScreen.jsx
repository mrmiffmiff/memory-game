import '../styles/InfoScreen.css'

export default function InfoScreen({ gameState, GameStates, startFunction }) {
    const infoText = (gameState === GameStates.UNSTARTED) ? 'Try to click every character without repeating. Score will reset upon failure.' : 'You won! Want to go again?'
    const buttonText = (gameState === GameStates.UNSTARTED) ? 'Start Game' : 'Restart Game';

    return (
        <div className="info-screen" onClick={startFunction}>
            <p>{infoText}</p>
            <button type="button">
                {buttonText}
            </button>
        </div>
    )
}