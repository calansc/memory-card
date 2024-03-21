import { useState, useEffect } from 'react';
import characters from "./Characters.jsx"



function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [newCharacters, setNewCharacters] = useState([]);
    const [pickList, setPickList] = useState([]);
    const [difficulty, setDifficulty] = useState(0);

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score)
        }
    },[highScore, score]
    );

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        if (difficulty === 0) {
            setNewCharacters(shuffle(characters.slice(0,6)))
        } else if (difficulty === "1") {
            setNewCharacters(shuffle(characters.slice(0,6)))
        } else if (difficulty === "2" ) {
            setNewCharacters(shuffle(characters.slice(0,10)))
        } else if (difficulty === "3" ) {
            setNewCharacters(shuffle(characters.slice(0,15)))
        }
        // setNewCharacters(shuffle(characters_3.slice(0,6)))
    },[difficulty, score]);

    function handleClick(e) {
        setScore(score + 1);
        if (pickList.includes(e.target.id)) {
            // Lose
            // alert('You Lose, Try Again!');
            document.querySelector(".loser-container").style.display = 'block';
            document.querySelector(".loser-container").style.visibility = 'visible';
            document.querySelector("body").style.overflow = 'hidden';
            window.scrollTo(0, 0);
            setScore(0);
            setPickList([]);
        } else if (score === newCharacters.length-1) {
            // Win
            // alert('You Win!');
            document.querySelector(".winner-container").style.display = 'block';
            document.querySelector(".winner-container").style.visibility = 'visible';
            window.scrollTo(0, 0);
        } else {
            // Update pickList with div id
            setPickList([...pickList, e.target.id])
        }
    }

    function pickDifficulty(e) {
        setDifficulty(e.target.id)
        document.body.style.overflow = 'visible';
    }
    useEffect(() => {
        if (difficulty > 0) {
            document.querySelector(".difficulty-container").style.display = 'none';
        } 
    }, [difficulty])

    function handleTryAgain() {
        document.querySelector(".loser-container").style.display = 'none';
        document.querySelector(".loser-container").style.visibility = 'invisible';
        document.body.style.overflow = 'visible';
    }
    function handlePlayAgain() {
        document.querySelector(".winner-container").style.display = 'none';
        document.querySelector(".winner-container").style.visibility = 'invisible';
        setScore(0);
        setPickList([]);
        setDifficulty(0);
        document.querySelector(".difficulty-container").style.display = 'block';

    }

    console.log(newCharacters);
    console.log(pickList);


    return (
        <div>
            <div className="winner-container">
                <div className="winner">
                    Great Memory, You Win!
                    <button className="winner-restart" 
                        onClick = {() => handlePlayAgain()}>
                        Play Again
                    </button>
                </div>
                
            </div>
            <div className="loser-container">
                <div className="loser">
                    You Lose, Try Again?
                    <button className="loser-restart" 
                        onClick = {() => handleTryAgain()}>
                        Try Again
                    </button>
                </div>
                
            </div>
            <div className="difficulty-container">
                <div className="difficulty"> Select Difficulty
                    <button className="difficulty-button" id="1" 
                        onClick={(e) => pickDifficulty(e)}>Easy
                    </button>
                    <button className="difficulty-button" id="2" 
                        onClick={(e) => pickDifficulty(e)}>Medium
                    </button>
                    <button className="difficulty-button" id="3" 
                        onClick={(e) => pickDifficulty(e)}>Hard
                    </button>
                    <div className="instructions">
                        Don't click the same image twice!
                        <br/>
                        Click the title to restart.
                    </div>
                </div>
            </div>
            <div className="scores">
                <div className="score">Score:{score}</div>
                <div className="high-score">High Score:{highScore}</div>
            </div>
            <div className="game-board">
                <div className="cards">
                    {newCharacters.map((character) => (
                        <div className="character-card" 
                        id={character.id} 
                        key={character.id} 
                        onClick={(e) => handleClick(e)}>
                            <img className="character-image"
                                id={character.id} 
                                src={character.img}
                            />
                            <div className="character-name" id={character.id}>
                                {character.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        )
}

export default App 