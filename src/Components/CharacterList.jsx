import { useState, useEffect } from 'react'

const CharacterList = () => {
    const [marvelList, setMarvelList] = useState([])

    useEffect(() => {
        fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=97002a5b48f935e4178a6e09968dbf5c&hash=75cc4ac67a344f2b4747f2bea826a8b7')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setMarvelList(data.results)
        })
    }, [])
  return (
    <div>
        {marvelList.map((marvel, idx) => (
            <li key={idx}>{marvel.data.results.name}</li>
        ))}
    </div>
  )
}

export default CharacterList