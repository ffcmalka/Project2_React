import { Link } from 'react-router-dom'

export default function Nav () {

  //creating the header
  return (
  <header>
    <div>
      <ul>
        <li>
      <Link to ="/">Home</Link>
        </li>
        <li>
      <Link to="/characters">Characters</Link>
        </li>
        <li>
        <Link to ="/humans">Humans</Link>
        </li>
        <li>
        <Link to="/aliens">Aliens</Link>
        </li>
      </ul>
    </div>
   </header>
  )
}