import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CharactersData from './CharactersData'
import HumanData from './HumanData'
import AlienData from './AlienData'

export default function Main () {
  return (
    <div className="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/characters" element={<CharactersData/>}/>
          <Route path="/humans" element={<HumanData/>}/>
          <Route path="/aliens" element={<AlienData/>}/>
        </Routes>
    </div>
  )
}