import { useState } from 'react'
import './App.css'
import CharacterList from './Components/CharacterList'
import CharacterDetail from './Components/CharacterDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CharacterList />
      <CharacterDetail />
    </>
  )
}

export default App;
