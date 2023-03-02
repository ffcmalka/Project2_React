import './Styles/CharacterData.css'
import CharacterData from './CharactersData';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

export default function CharacterDetails ({onClick}) {
    const [showBack, setShowBack] = useState(true);
  return(
    <div className="character-details-container" onClick={onClick}>
      <CSSTransition 
        in={showBack}
        timeout={300}
        classNames='flip'>
        <CharacterData onClick={() => {
          setShowBack((v) => !v);
        }}/>
      </CSSTransition>
    </div>
  )
  }