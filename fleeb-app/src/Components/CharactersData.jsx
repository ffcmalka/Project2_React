import CharacterDataCss from './Styles/CharacterData.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function CharacterData ({onClick}) {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right? X
    //set our data in state and log it X
    // render our data
    //setup Guard Opeartor

    const [ricks, setRicks] = useState([])
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        const url = "https://rickandmortyapi.com/api/character"

        const getRick = async () => {
          const response = await axios.get(url)
          console.log(response)
          setRicks(response.data.results)
        }

        getRick()
        
    }, [])

      let navigate = useNavigate()
      
      
        const showRick = (rick) => {
            navigate(`${rick.id}`)
        }

    console.log(ricks)
    //Our state of rick is an array x
    //inside of our guarded return, lets map through our ricks. x
    // set rick on line 14,22,24 to ricks plural x
    // creating onclick functions to flip cards for description. x
  if (ricks) {
    return (
      <div className="character-grid">
          <h1> Characters from Rick and Morty </h1>
          {
            ricks.map((rick) => (
              <div className="character-card-front" key={rick.id}>
                <div className="character-card" onClick={onClick}>
                {flip ? rick.status : rick.id}
                <h2>{rick.name}</h2>
                <img src={rick.image} alt={rick.name}/>
                <h3>ID No.{rick.id}</h3>
                <button onClick={() => setFlip(!flip)}>More Information</button>
                <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                </div>
              </div>
            ))
          }
            <div className="card-back">Back</div>
        </div>
    )} else {
      return (
        <h1> loading please wait... </h1>
      )
    }
    


  
}





{/* <img src="https://wallpaperaccess.com/full/4127824.jpg"/> */}