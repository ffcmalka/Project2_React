import { useState, useEffect, useNavigate } from 'react'
import axios from 'axios'
import AlienDataCss from '../Styles/AlienData.css'

export default function AlienData ({onClick}) {

    //making a state to set data in x
    //setting up a useEffect to control my components lifecycle x
    //organize API links / url x
    // make the darn API call, right? X
    //set our data in state and log it X
    // render our data
    //setup Guard Opeartor

    const [ricks, setRicks] = useState([])
    const [selectedRick, setSelectedRick] = useState(null)

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
        navigate(`${rick.id}`) }
      
        const flipCard = (rick) => {
        setSelectedRick(rick)
      }

    console.log(ricks)
    //Our state of rick is an array x
    //inside of our guarded return, lets map through our ricks. 
    // set rick on line 14,22,24 to ricks plural x
      if (ricks) {
          return (
            <div className="alien-grid">
              <h1>Aliens</h1>
     { 
                ricks.map((rick) => (
                  rick.species!="Human"?
                    <div className="alien-card" key={rick.id}>
                      <div className="alien-card-front" onClick={onClick}>
                        <h2>{rick.name}</h2>
                        <img src={rick.image} alt={rick.name}/>
                        <h3>ID No.{rick.id}</h3>
                        <div style={{minWidth: '30em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
                      </div>
                {selectedRick && selectedRick.id === rick.id && (<div className="character-card-back">
                  <h1>Species: {rick.species} </h1>
                  <h2>Status: {rick.status}</h2>
                  <button onClick={() => setSelectedRick(null)}>Close</button>
                </div>)}
                <button onClick={() => flipCard(rick)}>More Information</button>
              </div>:null
            
   ))}
             </div>      
          )} else {
              return (
                <h1> loading please wait </h1>
        )}}





{/* <img src="https://wallpaperaccess.com/full/4127824.jpg"/> */}