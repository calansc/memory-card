import { useState, useEffect } from 'react';

function Card(id, name, img) {
    return (
        <div className="card" id={id}>
            <img className="character-image" src={img} />
            <div className="character-name">{name}</div>
        </div>
    )
}

export default Card
