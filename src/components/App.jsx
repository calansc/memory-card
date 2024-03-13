import { useState, useEffect } from 'react';
import characters from "./Characters.jsx"


function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [newCharacters, setNewCharacters] = useState([]);
    const [pickList, setPickList] = useState([]);

    useEffect(() => {
        if (score > highScore) {
            setHighScore(score)
        }
    },[highScore, score]
    );

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    useEffect(() => {
        setNewCharacters(shuffle(characters))
    },[score]);

    function handleClick(e) {
        setScore(score + 1);
        if (pickList.includes(e.target.id)) {
            // Lose
            alert('You Lose, Try Again!');
            setScore(0);
            setPickList([]);
        } else {
            setPickList([...pickList, e.target.id])
        }

    }

    console.log(newCharacters);
    console.log(pickList);


    return (<div>
        <div className="score">Score:{score}</div>
        <div className="score">High Score:{highScore}</div>
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
        </div>)
}

export default App 