import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CharactersData from './CharactersData'

export default function Main () {
  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<CharactersData/>}/>
        </Routes>
    </div>
  )
}