import React from "react";


const CharacterDetail = ({ character }) => {
  if (!character) 
    return 
    <div>
        Select a character to view details 
    </div>;

    return (
        <div>
            <h2>{character.name}</h2>
            <img src={character.thumbnail.path + "." + character.thumbnail.extension} alt="{character.name}" width="200" />
            <p>{character.description || "No description available"}</p>
        </div>
    );
};


export default CharacterDetail;







