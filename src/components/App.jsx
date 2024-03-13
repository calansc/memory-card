import Card from "./Card.jsx"
import characters from "./Characters.jsx"

function App() {
    return (<div>
        <div className="cards">
            {characters.map((character) => (
               <div className="character-card" key={character.id}> 
                    <img className="character-image" 
                        src={character.img}
                    />
                    <div className="character-name">
                        {character.name}
                    </div>
                </div>
            ))}
        </div>
        </div>)
}

export default App 