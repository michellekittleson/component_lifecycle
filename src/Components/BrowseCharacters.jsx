import { useState, useEffect } from 'react';
import CharacterDetail from './CharacterDetail';

const CharacterList = () => {
    const [marvelList, setMarvelList] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetch(
          "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=97002a5b48f935e4178a6e09968dbf5c&hash=75cc4ac67a344f2b4747f2bea826a8b7"
        )
          .then((response) => response.json())
          .then((data) => {
            setMarvelList(data.data.results);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

  return (
    <div>
        <ul>
            {marvelList.map((character) => (
                <li key={character.id} onClick={() => setSelectedCharacter(character)}>
                    {character.name}
                </li>
            ))}
        </ul>

        {selectedCharacter && <CharacterDetail character={selectedCharacter} />}

    </div>
  );
};

export default CharacterList;