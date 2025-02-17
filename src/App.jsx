import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css'
import BrowseCharacters from './Components/BrowseCharacters'
import CharacterDetail from './Components/CharacterDetail'
import Comics from './Components/Comics';
import Home from './Components/Home';
import NavigationBar from './Components/NavigationBar';
import NotFound from './Components/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
        <Route path='/home/' element={<Home />}></Route>
        <Route path='/comics/' element={<Comics />}></Route>
        <Route path='/browsecharacters/' element={<BrowseCharacters />}></Route>
        <Route path='/characterdetail/:id' element={<CharacterDetail />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App;
